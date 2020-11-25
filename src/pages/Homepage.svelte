<script>
    import Dashcard from '../component/Dashcard.svelte'
    import Footer from '../component/Footer.svelte'
</script>


<div class=" text-gray-700 relative flex flex-col">
    <div class=" items-center flex justify-between flex-wrap">
        <div class=" flex-1 flex-col bg-white">
            <a ><img class="w-full" style="width:80%" src="https://img.ngfiles.com/misc/fp_featuretemp/uploads/0/343.jpg?1605745124"/></a>
            <!--Content-->
            <h1 class="mx-12 my-10 font-sans text-gray-700 sm:text-sm text-4xl">Featured Projects</h1>
            <Dashcard />
            <Dashcard />
            <Dashcard />
            <Footer />
        </div>
    </div>
</div>