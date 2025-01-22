import type { Actions } from './$types';
import type { Painting } from '$mytypes/Painting';
import type { Event } from '$mytypes/Event';
import { fail } from '@sveltejs/kit'
import { v4 as uuidv4 } from 'uuid';
import * as fs from 'fs';
import path from 'path';
import allPaintings from '$assets/paintings.json';
import allEvents from '$assets/events.json';

const supportedImageTypes = ['image/png',
                             'image/jpeg',
                             'image/gif',
                             'image/tiff',
                             'image/bpm',
                             'image/x-icon',
                             'image/apng',
                             'image/avif',
                             'image/svg',
                             'image/webp'];

export const actions: Actions = {
    addEvent: async({ request }) => {
        const data: FormData = await request.formData();

        const title: string       = data.has('title')       ? String(data.get('title'))       : '';
        const date: string        = data.has('date')        ? String(data.get('date'))        : '';
        const file: File | null   = data.has('picture')     ? data.get('picture') as File     : null;
        const description: string = data.has('description') ? String(data.get('description')) : '';
        const content: string     = data.has('content')     ? String(data.get('content'))     : '';

        const errors: Record<string, string> = {};
        if (!title       || typeof title !== 'string') errors.title = 'Title is required.';
        if (!date        || typeof date !== 'string') errors.date = 'Date is required.';
        if (!file        || !(file instanceof File) || file.size === 0) errors.picture = 'Upload a painting.';
        if (!description || typeof description !== 'string') errors.description = 'Description is required.';
        if (!content     || typeof content !== 'string') errors.content = 'Content is required.';
        if (areErrors(errors)) return createFail(data, errors, file);

        const id: string = uuidv4();
        const newEvent: Event = {
	        id: id,
	        title: title,
            date: date,
            picture: id + path.extname(file!.name),
	        description: description,
	        content: content,
        }

        if (!supportedImageTypes.includes(file!.type)) {
            errors.picture = `Unsupported image file type.`
        }
        if (areErrors(errors)) return createFail(data, errors, file);
        await fs.writeFile(`src/lib/assets/events/${newEvent.picture}`, await file!.bytes(), (err) => {
            errors.picture = `Failed to upload file: ${err}`;
        });
        if (areErrors(errors)) return createFail(data, errors, file);
        const newEvents: Event[] = allEvents.concat(newEvent);
        await fs.writeFile('src/lib/assets/events.json', JSON.stringify(newEvents), (err) => {
            errors.submit = `Failed to add event: ${err}`
        });
        if (areErrors(errors)) return createFail(data, errors, file);
    },
    updateEvent: async ({ request }) => {
        const data: FormData = await request.formData();

        const newId: string = uuidv4();
        const eventId: string     = data.has('selectedEventId') ? String(data.get('selectedEventId')) : '';
        const title: string       = data.has('title')           ? String(data.get('title'))           : '';
        const date: string        = data.has('date')            ? String(data.get('date'))            : '';
        const file: File | null   = data.has('picture')         ? data.get('picture') as File         : null;
        const description: string = data.has('description')     ? String(data.get('description'))     : '';
        const content: string     = data.has('content')         ? String(data.get('content'))         : '';
        
        const errors: Record<string, string> = {};
        const event: Event | undefined = allEvents.find(
            (e) => e.id.toLowerCase() === (eventId?.toLowerCase() ?? '')
        );
        if (!eventId || typeof eventId !== 'string') {
            errors.search = 'Select an event.';
        } else if (!event) {
            errors.search = 'Selected event was not found.';
        }
        
        const newFilename: string | null = file?.name
            ? newId + path.extname(file.name)
            : (event?.picture ?? null);

        if (!title       || typeof title !== 'string') errors.title = 'Title cannot be empty.';
        if (!date        || typeof date !== 'string') errors.date = 'Date is required.';
        if (!description || typeof description !== 'string') errors.description = 'Description cannot be empty.';
        if (!content     || typeof content !== 'string') errors.content = 'Content cannot be empty.';
        
        if (!file || !(file instanceof File) || file.size === 0) {
            if (title === event?.title
                && date === event?.date
                && description === event?.description
                && content === event?.content) {
                errors.title = errors.date = errors.picture = errors.description = errors.content = 'Make atleast one change.';
            }
        } else {
            if (!supportedImageTypes.includes(file.type)) {
                errors.picture = `Unsupported image file type.`
            }
            if (areErrors(errors)) return createFail(data, errors, file);
            if (newFilename) {
                await fs.writeFile(`src/lib/assets/events/${newFilename}`, await file.bytes(), (err) => {
                    errors.picture = `Failed to upload file: ${err}`;
                });
            }
        }
        if (areErrors(errors)) return createFail(data, errors, file);
        
        const newEvent: Event = {
	        id: newId,
	        title: title,
            date: date,
            picture: newFilename ? newFilename : event!.picture,
	        description: description,
	        content: content,
        }
        const newEvents: Event[] = allEvents.filter(
            (e) => e.id.toLowerCase() !== eventId.toLowerCase()
        ).concat(newEvent);
        await fs.writeFile('src/lib/assets/events.json', JSON.stringify(newEvents), (err) => {
            errors.submit = `Failed to update event: ${err}`;
        });
        if (areErrors(errors)) return createFail(data, errors, file);
    },
    removeEvent: async ({ request }) => {
        const data: FormData = await request.formData();
        const eventId: string     = data.has('selectedEventId') ? String(data.get('selectedEventId')) : '';
        const event: Event | undefined = allEvents.find(
            (e) => e.id.toLowerCase() === (eventId?.toLowerCase() ?? '')
        );

        const errors: Record<string, string> = {};
        if (!eventId || typeof eventId !== 'string') {
            errors.search = 'Select an event.';
        } else if (!event) {
            errors.search = 'Selected event was not found.';
        }
        if (areErrors(errors)) return createFail(data, errors);

        await fs.unlink(`src/lib/assets/events/${event!.picture}`, (err) => {
            errors.submit = `Failed to remove event: ${err}`;
        });
        if (areErrors(errors)) return createFail(data, errors);
        const newEvents: Event[] = allEvents.filter((e) => e.id.toLowerCase() !== eventId.toLowerCase());
        await fs.writeFile('src/lib/assets/events.json', JSON.stringify(newEvents), (err) => {
            errors.submit = `Failed to remove event: ${err}`;
        });
        if (areErrors(errors)) return createFail(data, errors);
    },
    addPainting: async ({ request }) => {
        const data: FormData = await request.formData();
        const id: string = uuidv4();
        
        const formCategory: string    = data.has('category')    ? String(data.get('category'))    : '';
        const file: File | null       = data.has('picture')     ? data.get('picture') as File     : null;
        const formTitle: string       = data.has('title')       ? String(data.get('title'))       : '';
        const formDescription: string = data.has('description') ? String(data.get('description')) : '';
        
        const errors: Record<string, string> = {};
        if (!file            || !(file instanceof File) || file.size === 0) errors.picture = 'Upload a painting.';
        if (!formCategory    || typeof formCategory !== 'string') errors.category = 'Category is required.';
        if (!formTitle       || typeof formTitle !== 'string') errors.title = 'Title is required.';
        if (!formDescription || typeof formDescription !== 'string') errors.description = 'Description is required.';
        
        if (areErrors(errors)) return createFail(data, errors, file);
        
        const painting: Painting = {
            id: id,
            category: formCategory,
            filename: id + path.extname(file!.name),
            title: formTitle,
            description: formDescription,
        }

        if (!supportedImageTypes.includes(file!.type)) {
            errors.picture = `Unsupported image file type.`;
        }
        if (areErrors(errors)) return createFail(data, errors, file);
        await fs.writeFile(`src/lib/assets/${painting.category}/${painting.filename}`, await file!.bytes(), (err) => {
            errors.picture = `Failed to upload file: ${err}`;
        });
        if (areErrors(errors)) return createFail(data, errors, file);
        const newPaintings: Painting[] = allPaintings.concat(painting);
        await fs.writeFile('src/lib/assets/paintings.json', JSON.stringify(newPaintings), (err) => {
            errors.submit = `Failed to add painting: ${err}`
        });
        if (areErrors(errors)) return createFail(data, errors, file);
    },
    updatePainting: async ({ request }) => {
        const data: FormData = await request.formData();

        const newId: string = uuidv4();
        const paintingId: string  = data.has('selectedPaintingId') ? String(data.get('selectedPaintingId')) : '';
        const title: string       = data.has('title')              ? String(data.get('title'))              : '';
        const category: string    = data.has('category')           ? String(data.get('category'))           : '';
        const file: File | null   = data.has('picture')            ? data.get('picture') as File            : null;
        const description: string = data.has('description')        ? String(data.get('description'))        : '';
        
        const errors: Record<string, string> = {};
        
        const painting: Painting | undefined = allPaintings.find(
            (p) => p.id.toLowerCase() === (paintingId?.toLowerCase() ?? '')
        );
        if (!paintingId || typeof paintingId !== 'string') {
            errors.search = 'Select a painting.';
        } else if (!painting) {
            errors.search = 'Selected painting was not found.';
        }

        const newFilename: string | null = file?.name
            ? newId + path.extname(file.name)
            : (painting?.filename ?? null);

        if (!title || typeof title !== 'string') errors.title = 'Title cannot be empty.';
        if (!description || typeof description !== 'string') errors.description = 'Description cannot be empty.';
        
        if (!file || !(file instanceof File) || file.size === 0) {
            if (title === painting?.title
                && description === painting?.description
                && category === painting?.category) {
                errors.title = errors.category = errors.picture = errors.description = 'Make atleast one change.';
            }
        } else {
            if (!supportedImageTypes.includes(file.type)) {
                errors.picture = `Unsupported image file type.`;
            }
            if (areErrors(errors)) return createFail(data, errors, file);
            if (newFilename) {
                await fs.writeFile(`src/lib/assets/${category}/${newFilename}`, await file.bytes(), (err) => {
                    errors.picture = `Failed to upload file: ${err}`;
                });
            }
        }
        if (areErrors(errors)) return createFail(data, errors, file);

        // No file upload with a change in category
        if ((!file || !(file instanceof File) || file.size === 0)
            && painting?.category
            && category !== painting.category) {
            await fs.rename(`src/lib/assets/${painting.category}/${newFilename}`,
                            `src/lib/assets/${category}/${newFilename}`,
                            (err) => { errors.category = `Failed to change category: ${err}` });
            if (areErrors(errors)) return createFail(data, errors, file);
        }

        const newPainting: Painting = {
            ...painting,
            id: newId,
            category: category,
            filename: newFilename ? newFilename : painting!.filename,
            title: title,
            description: description,
        }
        const newPaintings: Painting[] = allPaintings.filter(
            (p) => p.id.toLowerCase() !== paintingId.toLowerCase()
        ).concat(newPainting);
        await fs.writeFile('src/lib/assets/paintings.json', JSON.stringify(newPaintings), (err) => {
            errors.submit = `Failed to update picture: ${err}.`
        });
        if (areErrors(errors)) return createFail(data, errors, file);
    },
    removePainting: async ({ request }) => {
        const data: FormData = await request.formData();
        const paintingId: string = data.has('selectedPaintingId') ? String(data.get('selectedPaintingId')) : '';
        const painting: Painting | undefined = allPaintings.find(
            (p) => p.id.toLowerCase() === (paintingId?.toLowerCase() ?? '')
        );

        const errors: Record<string, string> = {};
        if (!paintingId || typeof paintingId !== 'string') {
            errors.search = 'Select a painting.';
        } else if (!painting) {
            errors.search = 'Selected painting was not found.';
        }

        if (areErrors(errors)) return createFail(data, errors);
        await fs.unlink(`src/lib/assets/${painting!.category}/${painting!.filename}`, (err) => {
            errors.submit = `Failed to remove picture: ${err}.`
        });
        if (areErrors(errors)) return createFail(data, errors);
        const newPaintings: Painting[] = allPaintings.filter((p) => p.id.toLowerCase() !== paintingId.toLowerCase());
        await fs.writeFile('src/lib/assets/paintings.json', JSON.stringify(newPaintings), (err) => {
            errors.submit = `Failed to remove picture: ${err}.`;
        });
        if (areErrors(errors)) return createFail(data, errors);
    }
}

const areErrors = (errors: Record<string, string>): boolean =>
    Object.keys(errors).length > 0;

const createFail = (data: FormData, errors: Record<string, string>, file?: File | null): any => {
    const failData = {
        data: Object.fromEntries(data),
        errors,
    }
    if (file !== undefined) failData.data.picture = file?.toString() ?? ''; // TODO: think of a better solution
    return fail(400, failData);
}
