#!/usr/bin/env bash

echo "+-------------------+"
echo "+ Adding a painting +"
echo "+-------------------+"

## INPUT
# Title
read -p "Enter title (hit enter for no title): " title

# ID
read -p "Custom ID (y/n)? " customID
if [[ $customID == [yY]* ]]; then
	read -p "Enter ID: " id
else
	id=$(uuidgen)
	echo "Auto generated UUID: $id"
fi

# Filename
read -p "Enter filename (without extension): " filename

# Category
echo "Category selection;"
echo "1. Main Gallery"
echo "2. Calligraphy"
echo "3. Other"

while [[ $category != [123] ]]; do
	read -p "Enter category: " category
done

case "$category" in
    1 )
        category="main"
        ;;
    2 )
		category="calligraphy"
		;;
    3 )
		category="other"
		;;
esac

# Description
read -p "Enter description: " description

## Calculation
paintings=$(
	jq --arg id "$id" \
	   --arg category "$category" \
	   --arg filename "$filename.jpeg" \
	   --arg title "$title" \
	   --arg description "$description" \
    '. += [{"id": $id,"category":$category,"filename":$filename,"title":$title,"description":$description}]' \
    ./src/lib/assets/paintings.json
)

## Output
echo $paintings > ./src/lib/assets/paintings.json
