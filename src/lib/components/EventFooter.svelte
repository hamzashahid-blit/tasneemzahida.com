<script lang="ts">
  let { date, textLength }: { date: Date, textLength: number } = $props();

  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  function ordinalSuffix(i: number) {
  	let j: number = i % 10,
  		k: number = i % 100;
	return (j == 1 && k != 11) ? "st"
	     : (j == 2 && k != 12) ? "nd"
		 : (j == 3 && k != 13) ? "rd" : "th";
  }
</script>

<span>
	{date.getDate()}<sup>{ordinalSuffix(date.getDate())}</sup>
	{months[date.getMonth()]} {date.getFullYear()}
</span>
<span>• {Math.trunc(textLength / 15 / 60)}m read</span>
