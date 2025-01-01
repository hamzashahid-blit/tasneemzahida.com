<script lang="ts">
  import Icon from 'svelte-awesome';
  import email from 'svelte-awesome/icons/envelopeO';
  import instagram from 'svelte-awesome/icons/instagram';
  import whatsapp from 'svelte-awesome/icons/whatsapp';
  import facebook from 'svelte-awesome/icons/facebookSquare';
</script>

<title>Tasneem Zahida: Contacts</title>
<div class="min-h-[calc(100vh-theme(space.28)-theme(space.10)-theme(space.4))]
			lg:min-h-[calc(100vh-theme(space.20)-theme(space.2))] w-full flex items-center justify-center mb-10 -my-5 lg:-my-10">
  <div>
	 <h1 class="text-5xl lg:text-hxl text-primary mb-10">Contacts</h1>
	 <div class="flex flex-col lg:flex-row items-center justify-center lg:space-x-14">
	   <table class="table-auto text-primary text-[1.7em] lg:text-3xl mb-2 lg:mb-3">
	     <tbody>
	      <!-- Mail -->
	      <tr>
	       <td class="text-center align-middle pr-4 pb-4 lg:pb-3">
			 <a href="mailto:tasneemzart@gmail.com"><Icon data={email} scale={2}/></a></td>
	       <td class="pb-3"><a href="mailto:tasneemzart@gmail.com">tasneemzart@gmail.com</a></td>
	      </tr>
	      <!-- Phone -->
	      <tr>
	       <td class="text-center align-middle pr-4"><Icon data={whatsapp} scale={2}/></td>
	       <td>+1 (647) 819-2962</td>
	      </tr>
	     </tbody>
	   </table>
	   <table class="table-auto w-full lg:w-min text-primary text-[1.7em] lg:text-3xl mb-3">
	     <tbody>
	      <!-- Instagram -->
		  <tr>
		    <td class="text-center align-middle pb-1 pr-4 pb-3">
	          <a class="text-primary" href="https://www.instagram.com/tasneemzahida_art/">
			    <Icon data={instagram} scale={2}/>
	          </a>
	        </td>
		    <td class="pb-3">
	          <a class="text-primary" href="https://www.instagram.com/tasneemzahida_art/">
			    @tasneemzahida_art
	          </a>
		    </td>
		  </tr>
	      <!-- Facebook -->
		  <tr>
		    <td class="text-center align-middle pb-1 pr-4">
	          <a class="text-primary" href="https://www.facebook.com/tasneem.zahida.1">
			    <Icon data={facebook} scale={1.85}/>
			  </a>
		    </td>
		    <td class="">
	          <a class="text-primary" href="https://www.facebook.com/tasneem.zahida.1">
			    Tasneem Zahida
			  </a>
		    </td>
		  </tr>
	     </tbody>
	   </table>
	 </div>
  </div>
</div>
