<script lang="ts">
  import { Carta, MarkdownEditor } from 'carta-md';
  // Everything here is client side rendered otherwise isomorphic-dompurify
  import DOMPurify from 'dompurify';
  import 'carta-md/default.css';

  let { content = $bindable('') }: { content: string } = $props();
  
  const carta = new Carta({
    sanitizer: DOMPurify.sanitize
  });
</script>

<div>
  <MarkdownEditor {carta} bind:value={content} />
</div>

<style>
  :global(textarea.carta-font-code, div.carta-font-code) {
    line-height: 1.2rem;
    font-size: 0.9rem;
  }
  @media only screen and (max-width: 768px) {
    div {
      max-width: 99%;
    }
  }
</style>
