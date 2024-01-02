import React from 'react'

const Hero = () => {
  return (
    <section class="dark:text-black text-black w-full bg-white">
	<div class="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-around">
		<div class="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
			<img src="/hero-img.webp" alt="" class="object-contain h-72 sm:h-80 lg:h-120 xl:h-140 2xl:h-120" />
		</div>
		<div class="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
			<h1 class="text-2xl font-bold leadi sm:text-4xl">Welcome to
				<span class="dark:text-violet-400"> Joq Cafe </span>Fresh Juices 
				<br />
			<h2 class="text-2xl font-bold leadi sm:text-2xl">Vegan Desserts Manhattan</h2>	
			</h1>
			<p class="mt-6 mb-8 text-lg sm:mb-12">Experience locally-sourced ingredients and innovative dishes at Joq Cafe. 
			</p>
			<div class="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
				<a rel="noopener noreferrer" href="#" class="px-8 py-3 text-lg font-semibold rounded dark:bg-violet-400 dark:text-white">LEARN MORE</a>
			</div>
		</div>
	</div>
</section>
  )
}

export default Hero
