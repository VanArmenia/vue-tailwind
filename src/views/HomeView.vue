<template>
  <div>
    <navbar-component></navbar-component>
    <main>
      <div class="relative pt-16 pb-48 flex content-center items-center justify-center"
           style="min-height: 20vh;">
        <div class="absolute top-0 w-full h-full bg-contain bg-hero-pattern">
          <span id="blackOverlay" class="w-full h-full absolute opacity-30 bg-black"></span>
        </div>

        <div class="container relative mx-auto">
          <div class="items-center flex flex-wrap">
            <div class="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
              <div class="pr-12">
                <h1 class="text-white font-semibold text-5xl">
                  Your hub for arthouse movies
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div
            class="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
            style="height: 70px;"
        >
        </div>

        <div class="flex absolute bottom-3 right-3 w-full justify-between px-6">
          <ul class="flex gap-5 text-cyan-600 font-anton tracking-wider bg-dark-amber p-3">
            <li><a href="#">SHOW ALL</a></li>
            <li><a href="#">LATEST TRAILERS</a></li>
            <li><a href="#">TOP RATED</a></li>
            <li><a href="#">MOST COMMENTED</a></li>
          </ul>
          <form >
            <div class="flex">
              <label for="search-dropdown" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Your Email</label>
              <button id="dropdown-button" data-dropdown-toggle="dropdown" class="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-amber-600 border border-amber-600 rounded-l-lg hover:bg-gray-200 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600" type="button">All categories <svg class="ml-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>
              <div id="dropdown" class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700" data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="top" style="position: absolute; inset: auto auto 0px 0px; margin: 0px; transform: translate3d(897px, 5637px, 0px);">
                <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-button">
                  <li>
                    <button type="button" class="inline-flex py-2 px-4 w-full hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Design</button>
                  </li>
                  <li>
                    <button type="button" class="inline-flex py-2 px-4 w-full hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Logos</button>
                  </li>
                </ul>
              </div>
              <div class="relative w-full">
                <input type="search" id="search-dropdown" class="block p-2.5 w-full z-20 text-sm text-gray-900 bg-dark-amber rounded-r-lg border-l-black border-l-2 border border-gray-900  dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white " placeholder="Search Mockups, Logos, Design Templates..." required>
                <button type="submit" class="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg></button>
              </div>
            </div>
          </form>
        </div>

      </div>
      <section class="artists pt-2 pb-8 bg-dark-amber text-amber-50">
        <div v-if="error">{{ error }}</div>
        <div v-if="movies.length" class="layout">
          <MovieList :movies="movies" />
        </div>
        <div v-else>
          <Spinner />
        </div>
      </section>

      <section class="pb-2 bg-dark-amber pt-0.5 text-amber-200">
        <form @submit.prevent="SearchMovies()" class="flex justify-center flex-col p-6">
          <input type="text" placeholder="What are you looking for?" v-model="search" class="block appearance-none outline-none bg-none w-44 my-0 mx-auto rounded-md mb-2"/>
          <input type="submit" value="Search" class="cursor-pointer bg-lighter-amber w-44 my-0 mx-auto rounded-md" />
        </form>

        <div class="sm:grid-cols-2 md:grid-cols-4 grid-cols-1 grid gap-3 mb-10 px-4 overflow-hidden relative">
          <img :src="fullPath" alt="Movie Poster" />
        </div>

        <div class="sm:grid-cols-2 md:grid-cols-4 grid-cols-1 grid gap-3 mb-10 px-4 overflow-hidden relative">
          <div v-for="movie in moviesApi" :key="movie.imdbID" class="">
            <router-link :to="'/movie/' + movie.imdbID" class="relative group block mr-4 flex-shrink-0">
              <img :src="movie.Poster" alt="Movie Poster" />
              <div class="absolute inset-0 bg-black opacity-75 hidden group-hover:flex flex-col justify-end text-white px-4 py-4 cursor-pointer">
                <div class="w-full">
                  <h3 class="text-sm mb-2">{{ movie.Title }}</h3>
                  <p class="year">{{ movie.Year }}</p>
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </section>

      <section class="pb-2 bg-dark-amber pt-0.5 text-amber-200">
        <div class="mx-auto px-4">
          <div class="flex flex-wrap mt-4">
            <div id="content" class="w-full">
              <div class="h-6 flex justify-between border-b-amber-100 border-b-2 mb-2">
                <h2 class="text-xs font-anton tracking-widest">LATEST TRAILERS</h2>
                <p class=""><a href="#">See all</a></p>
              </div>
              <div class="box w-full grid grid-cols-5 gap-4">
                <div class="movie shadow bg-lighter-amber pb-4">
                  <div class="movie-image"> <span class="hidden"><span class="name">X-MAN</span></span> <a href="#"><img src="../assets/img/team-4-470x470.png" alt="" /></a> </div>
                  <div class="rating flex justify-between p-2">
                    <div class="flex">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span class="comments">10</span>
                    </div>
                  </div>
                </div>
                <div class="movie shadow bg-lighter-amber pb-4">
                  <div class="movie-image"> <span class="hidden"><span class="name">X-MAN</span></span> <a href="#"><img src="../assets/img/team-4-470x470.png" alt="" /></a> </div>
                  <div class="rating flex justify-between p-2">
                    <div class="flex">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span class="comments">10</span>
                    </div>
                  </div>
                </div>
                <div class="movie shadow bg-lighter-amber pb-4">
                  <div class="movie-image"> <span class="hidden"><span class="name">X-MAN</span></span> <a href="#"><img src="../assets/img/team-4-470x470.png" alt="" /></a> </div>
                  <div class="rating flex justify-between p-2">
                    <div class="flex">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span class="comments">10</span>
                    </div>
                  </div>
                </div>
                <div class="movie shadow bg-lighter-amber pb-4">
                  <div class="movie-image"> <span class="hidden"><span class="name">X-MAN</span></span> <a href="#"><img src="../assets/img/team-4-470x470.png" alt="" /></a> </div>
                  <div class="rating flex justify-between p-2">
                    <div class="flex">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span class="comments">10</span>
                    </div>
                  </div>
                </div>
                <div class="movie shadow bg-lighter-amber pb-4">
                  <div class="movie-image"> <span class="hidden"><span class="name">X-MAN</span></span> <a href="#"><img src="../assets/img/team-4-470x470.png" alt="" /></a> </div>
                  <div class="rating flex justify-between p-2">
                    <div class="flex">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span class="comments">10</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="content" class="w-full mt-4">
              <div class="h-6 flex justify-between border-b-amber-100 border-b-2 mb-2">
                <h2 class="text-xs font-anton tracking-widest">LATEST TRAILERS</h2>
                <p class=""><a href="#">See all</a></p>
              </div>
              <div class="box w-full grid grid-cols-5 gap-4">
                <div class="movie shadow bg-lighter-amber pb-4">
                  <div class="movie-image"> <span class="hidden"><span class="name">X-MAN</span></span> <a href="#"><img src="../assets/img/team-4-470x470.png" alt="" /></a> </div>
                  <div class="rating flex justify-between p-2">
                    <div class="flex">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span class="comments">10</span>
                    </div>
                  </div>
                </div>
                <div class="movie shadow bg-lighter-amber pb-4">
                  <div class="movie-image"> <span class="hidden"><span class="name">X-MAN</span></span> <a href="#"><img src="../assets/img/team-4-470x470.png" alt="" /></a> </div>
                  <div class="rating flex justify-between p-2">
                    <div class="flex">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span class="comments">10</span>
                    </div>
                  </div>
                </div>
                <div class="movie shadow bg-lighter-amber pb-4">
                  <div class="movie-image"> <span class="hidden"><span class="name">X-MAN</span></span> <a href="#"><img src="../assets/img/team-4-470x470.png" alt="" /></a> </div>
                  <div class="rating flex justify-between p-2">
                    <div class="flex">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span class="comments">10</span>
                    </div>
                  </div>
                </div>
                <div class="movie shadow bg-lighter-amber pb-4">
                  <div class="movie-image"> <span class="hidden"><span class="name">X-MAN</span></span> <a href="#"><img src="../assets/img/team-4-470x470.png" alt="" /></a> </div>
                  <div class="rating flex justify-between p-2">
                    <div class="flex">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span class="comments">10</span>
                    </div>
                  </div>
                </div>
                <div class="movie shadow bg-lighter-amber pb-4">
                  <div class="movie-image"> <span class="hidden"><span class="name">X-MAN</span></span> <a href="#"><img src="../assets/img/team-4-470x470.png" alt="" /></a> </div>
                  <div class="rating flex justify-between p-2">
                    <div class="flex">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span class="comments">10</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="news flex flex-wrap mt-16 py-3 bg-lighter-amber">
            <div class="flex p-4 pt-1">
              <div class="w-3 h-3 shadow-lg rounded-full bg-amber-200 mr-2 mt-1">
              </div>
              <h3 class="text-sm font-anton tracking-widest text-amber-100">
                TOP NEWS
              </h3>
            </div>
            <div class="w-full mr-auto ml-auto grid-cols-3 grid text-amber-50 pt-2">
              <div class="grid grid-cols-5">
                <div class="px-4 col-span-2">
                  <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-cyan-600">
                    <img alt="..."
                         src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1051&amp;q=80"
                         class="w-full align-middle rounded-t-lg"
                    />
                    <blockquote class="relative py-2 px-2">
                      <svg
                          preserveAspectRatio="none"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 583 95"
                          class="absolute left-0 w-full block"
                          style="height: 95px; top: -94px;"
                      >
                        <polygon
                            points="-30,95 583,95 583,65"
                            class="text-cyan-600 fill-current"
                        ></polygon>
                      </svg>
                      <h4 class="text-xl font-bold text-white">
                        Top Notch Services
                      </h4>
                    </blockquote>
                  </div>
                </div>
                <div class="px-4 col-span-3">
                  <p class="text-lg font-light leading-relaxed">
                    Don't let your uses guess by attaching tooltips and popoves to
                    any element. Just make sure you enable them first via
                    JavaScript.
                  </p>
                </div>
              </div>
              <div class="grid grid-cols-5">
                <div class="px-4 col-span-2">
                  <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-cyan-600">
                    <img alt="..."
                         src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1051&amp;q=80"
                         class="w-full align-middle rounded-t-lg"
                    />
                    <blockquote class="relative py-2 px-2">
                      <svg
                          preserveAspectRatio="none"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 583 95"
                          class="absolute left-0 w-full block"
                          style="height: 95px; top: -94px;"
                      >
                        <polygon
                            points="-30,95 583,95 583,65"
                            class="text-cyan-600 fill-current"
                        ></polygon>
                      </svg>
                      <h4 class="text-xl font-bold text-white">
                        Top Notch Services
                      </h4>
                    </blockquote>
                  </div>
                </div>
                <div class="px-4 col-span-3">
                  <p class="text-lg font-light leading-relaxed">
                    Don't let your uses guess by attaching tooltips and popoves to
                    any element. Just make sure you enable them first via
                    JavaScript.
                  </p>
                </div>
              </div>
              <div class="grid grid-cols-5">
                <div class="px-4 col-span-2">
                  <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-cyan-600">
                    <img alt="..."
                         src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1051&amp;q=80"
                         class="w-full align-middle rounded-t-lg"
                    />
                    <blockquote class="relative py-2 px-2">
                      <svg
                          preserveAspectRatio="none"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 583 95"
                          class="absolute left-0 w-full block"
                          style="height: 95px; top: -94px;"
                      >
                        <polygon
                            points="-30,95 583,95 583,65"
                            class="text-cyan-600 fill-current"
                        ></polygon>
                      </svg>
                      <h4 class="text-xl font-bold text-white">
                        Top Notch Services
                      </h4>
                    </blockquote>
                  </div>
                </div>
                <div class="px-4 col-span-3">
                  <p class="text-lg font-light leading-relaxed">
                    Don't let your uses guess by attaching tooltips and popoves to
                    any element. Just make sure you enable them first via
                    JavaScript.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="artists pt-2 pb-48 bg-dark-amber text-amber-50">
        <div class="artists mx-auto px-4">
          <div class="flex flex-wrap mt-16 p-3 bg-lighter-amber">
            <div class="flex pt-1 ">
              <div class="w-3 h-3 shadow-lg rounded-full bg-amber-200 mr-2 mt-1">
              </div>
              <h3 class="text-sm font-anton tracking-widest text-amber-100">
                TOP ARTISTS
              </h3>
            </div>
            <div class="grid-cols-6 grid pt-6">
              <div class="lg:mb-0 mb-12 px-4">
                <div class="px-2">
                  <img
                      alt="..."
                      src="../assets/img/team-1-800x800.jpg"
                      class="shadow-lg rounded-full max-w-full mx-auto"
                      style="max-width: 160px;"
                  />
                  <div class="pt-6 text-center">
                    <h5 class="text-xl font-bold">Ryan Tompson</h5>
                    <p class="mt-1 text-sm text-gray-500 uppercase font-semibold">
                      Web Developer
                    </p>
                  </div>
                </div>
              </div>
              <div class="lg:mb-0 mb-12 px-4">
                <div class="px-2">
                  <img
                      alt="..."
                      src="../assets/img/team-1-800x800.jpg"
                      class="shadow-lg rounded-full max-w-full mx-auto"
                      style="max-width: 160px;"
                  />
                  <div class="pt-6 text-center">
                    <h5 class="text-xl font-bold">Ryan Tompson</h5>
                    <p class="mt-1 text-sm text-gray-500 uppercase font-semibold">
                      Web Developer
                    </p>
                  </div>
                </div>
              </div>
              <div class="lg:mb-0 mb-12 px-4">
                <div class="px-2">
                  <img
                      alt="..."
                      src="../assets/img/team-1-800x800.jpg"
                      class="shadow-lg rounded-full max-w-full mx-auto"
                      style="max-width: 160px;"
                  />
                  <div class="pt-6 text-center">
                    <h5 class="text-xl font-bold">Ryan Tompson</h5>
                    <p class="mt-1 text-sm text-gray-500 uppercase font-semibold">
                      Web Developer
                    </p>
                  </div>
                </div>
              </div>
              <div class="lg:mb-0 mb-12 px-4">
                <div class="px-2">
                  <img
                      alt="..."
                      src="../assets/img/team-1-800x800.jpg"
                      class="shadow-lg rounded-full max-w-full mx-auto"
                      style="max-width: 160px;"
                  />
                  <div class="pt-6 text-center">
                    <h5 class="text-xl font-bold">Ryan Tompson</h5>
                    <p class="mt-1 text-sm text-gray-500 uppercase font-semibold">
                      Web Developer
                    </p>
                  </div>
                </div>
              </div>
              <div class="lg:mb-0 mb-12 px-4">
                <div class="px-2">
                  <img
                      alt="..."
                      src="../assets/img/team-1-800x800.jpg"
                      class="shadow-lg rounded-full max-w-full mx-auto"
                      style="max-width: 160px;"
                  />
                  <div class="pt-6 text-center">
                    <h5 class="text-xl font-bold">Ryan Tompson</h5>
                    <p class="mt-1 text-sm text-gray-500 uppercase font-semibold">
                      Web Developer
                    </p>
                  </div>
                </div>
              </div>
              <div class="lg:mb-0 mb-12 px-4">
                <div class="px-2">
                  <img
                      alt="..."
                      src="../assets/img/team-1-800x800.jpg"
                      class="shadow-lg rounded-full max-w-full mx-auto"
                      style="max-width: 160px;"
                  />
                  <div class="pt-6 text-center">
                    <h5 class="text-xl font-bold">Ryan Tompson</h5>
                    <p class="mt-1 text-sm text-gray-500 uppercase font-semibold">
                      Web Developer
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
    <footer-component></footer-component>
  </div>
</template>
<script>
import {computed, ref} from 'vue';
import env from '@/env.js'
import NavbarComponent from "../components/Navbar.vue";
import FooterComponent from "../components/Footer.vue";
import getMovies from '../composables/getMovies'
// component imports
import MovieList from '../components/MovieList.vue'
import Spinner from '../components/Spinner.vue'


export default {
  name: "landing-page",
  components: {
    NavbarComponent, FooterComponent, MovieList, Spinner
  },
  setup() {
    const { movies, error, load } = getMovies()
    const search = ref("");
    const moviesTm = ref("");
    const moviesApi = ref([]);
    const fullPath = computed(() => {
      return "https://image.tmdb.org/t/p/w500" +  moviesTm.value.poster_path
    })

    // fetching movies by search from Omdbapi
    const SearchMovies = () => {
      if (search.value !== "") {
        fetch(`http://www.omdbapi.com/?apikey=${env.omdp_api_key}&s=${search.value}`)
            .then(response => response.json())
            .then(data => {
              moviesApi.value = data.Search;
              console.log(moviesApi.value)
              search.value = "";
            });
      }
    }

    // fetching movie by ID from Themoviedb
    fetch(`https://api.themoviedb.org/3/movie/100?api_key=${env.tmdb_api_key}`)
        .then(response => response.json())
        .then(data => {
          moviesTm.value = data;
          console.log(moviesTm.value)
        });
    load()

    return { movies, error, search, moviesApi, SearchMovies, fullPath }
  },
}
</script>
