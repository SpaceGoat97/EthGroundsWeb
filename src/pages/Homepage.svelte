<script>
    import Dashcard from '../component/Dashcard.svelte'
    import Footer from '../component/Footer.svelte'
</script>


<div class=" text-gray-700 relative flex flex-col">
    <div class=" items-center flex justify-between flex-wrap">
        <div class=" flex-1 flex-col bg-white">
            <a ><img class="mx-auto" style="height:50%; width:50%" src="https://ethgrounds.s3.eu-west-2.amazonaws.com/1515101_mogy64_roll-tron.png"/></a>
            <!--Content-->
            <h1 class="mx-12 pt-5 font-sans text-gray-700 sm:text-xl lg:text-4xl">Featured Projects</h1>
            <Dashcard />
            <h1 class="mx-12 pt-5 font-sans text-gray-700 sm:text-xl lg:text-4xl">Featured Projects</h1>
            <Dashcard />
            <h1 class="mx-12 pt-5 font-sans text-gray-700 sm:text-xl lg:text-4xl">Featured Projects</h1>
            <Dashcard />
            <Footer />
        </div>
    </div>
</div>