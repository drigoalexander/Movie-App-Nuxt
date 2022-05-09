<template>
  <div
    class="bg-[#081F34] w-screen h-full font-open max-w-[1920px] mx-auto relative overflow-hidden"
  >
    <div class="flex flex-col px-20 gap-20 h-full">
      <div class="flex flex-row items-center justify-between py-10">
        <h1 class="text-white font-bold text-3xl">NUXTFLIX</h1>

        <div class="flex gap-20 items-center">
          <input
            type="text"
            class="rounded-lg px-4 py-1"
            placeholder="Search Movie..."
          />
          <h1 class="text-2xl font-bold text-white">DRIGO</h1>
        </div>
      </div>

      <div class="flex items-start gap-10 h-full pb-20">
        <div class="w-1/4">
          <div class="flex flex-col gap-6">
            <div class="flex flex-col items-start gap-6">
              <p class="text-lg text-[#F5F5F5] font-medium">New Movies</p>
              <ul class="w-full flex flex-col gap-6">
                <li class="">
                  <div
                    class="gambar w-full h-60 rounded-xl bg-cover relative overflow-hidden"
                  >
                    <div
                      class="absolute bottom-0 left-0 w-full bg-[#d4d4d4] py-2 px-4 bg-opacity-20 backdrop-blur-lg"
                    >
                      <div class="flex items-center justify-evenly">
                        <img
                          class="hover:scale-110 transition duration-300 ease-in-out"
                          src="../assets/play.png"
                          alt=""
                        />
                        <div
                          class="flex flex-col items-start justify-center text-left"
                        >
                          <h1 class="text-white font-bold text-md">
                            Avengers: Endgame
                          </h1>
                          <p class="text-[#E3E3E3] font-medium text-sm">
                            Marvel Cinematic Universe
                          </p>
                        </div>

                        <div class="w-[0.1rem] h-10 bg-white"></div>

                        <h1 class="text-white font-bold">Action</h1>
                      </div>
                    </div>
                  </div>
                </li>

                <li class="">
                  <div
                    class="gambar w-full h-60 rounded-xl bg-cover relative overflow-hidden"
                  >
                    <div
                      class="absolute bottom-0 left-0 w-full bg-[#d4d4d4] py-2 px-4 bg-opacity-20 backdrop-blur-lg"
                    >
                      <div class="flex items-center justify-evenly">
                        <img
                          class="hover:scale-110 transition duration-300 ease-in-out"
                          src="../assets/play.png"
                          alt=""
                        />
                        <div
                          class="flex flex-col items-start justify-center text-left"
                        >
                          <h1 class="text-white font-bold text-md">
                            Avengers: Endgame
                          </h1>
                          <p class="text-[#E3E3E3] font-medium text-sm">
                            Marvel Cinematic Universe
                          </p>
                        </div>

                        <div class="w-[0.1rem] h-10 bg-white"></div>

                        <h1 class="text-white font-bold">Action</h1>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            <div class="w-full h-52 bg-[#0B253D] rounded-lg px-6 py-8">
              <div class="flex flex-col items-start gap-4">
                <h1 class="text-white font-semibold text-lg">
                  Search by genres...
                </h1>

                <ul class="flex flex-1 flex-wrap gap-4 font-semibold">
                  <li
                    class="hover:scale-110 duration-300 ease-in-out text-white px-6 py-2 rounded-full w-auto odd:bg-[#00AFD2] even:bg-[#7BC79A]"
                  >
                    Action
                  </li>
                  <li
                    class="hover:scale-110 duration-300 ease-in-out text-white px-6 py-2 rounded-full w-auto odd:bg-[#00AFD2] even:bg-[#7BC79A]"
                  >
                    Test
                  </li>
                  <li
                    class="hover:scale-110 duration-300 ease-in-out text-white px-6 py-2 rounded-full w-auto odd:bg-[#00AFD2] even:bg-[#7BC79A]"
                  >
                    Test
                  </li>
                  <li
                    class="hover:scale-110 duration-300 ease-in-out text-white px-6 py-2 rounded-full w-auto odd:bg-[#00AFD2] even:bg-[#7BC79A]"
                  >
                    Test
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="w-3/4">
          <div class="flex flex-col w-full gap-8">
            <div class="flex items-center justify-between">
              <h1 class="text-[#F5F5F5] text-2xl">Action</h1>

              <button
                class="text-[#AEAEAE] flex items-center justify-center gap-4"
              >
                See More
                <span>
                  <img src="../assets/arrow-2.png" alt="" />
                </span>
              </button>
            </div>
            <ul
              class="flex items-center justify-start overflow-x-auto gap-10 snap-x"
            >
              <li class="snap-start">
                <div
                  class="gambar w-96 h-60 rounded-xl bg-cover relative overflow-hidden"
                >
                  <div
                    class="absolute bottom-0 left-0 w-full bg-[#d4d4d4] py-2 px-4 bg-opacity-20 backdrop-blur-lg"
                  >
                    <div class="flex items-center justify-evenly">
                      <img
                        class="hover:scale-110 transition duration-300 ease-in-out"
                        src="../assets/play.png"
                        alt=""
                      />
                      <div
                        class="flex flex-col items-start justify-center text-left"
                      >
                        <h1 class="text-white font-bold text-md">
                          Avengers: Endgame
                        </h1>
                        <p class="text-[#E3E3E3] font-medium text-sm">
                          Marvel Cinematic Universe
                        </p>
                      </div>

                      <div class="w-[0.1rem] h-10 bg-white"></div>

                      <h1 class="text-white font-bold">Action</h1>
                    </div>
                  </div>
                </div>
              </li>

              <li class="snap-start">
                <div
                  class="gambar w-96 h-60 rounded-xl bg-cover relative overflow-hidden"
                >
                  <div
                    class="absolute bottom-0 left-0 w-full bg-[#d4d4d4] py-2 px-4 bg-opacity-20 backdrop-blur-lg"
                  >
                    <div class="flex items-center justify-evenly">
                      <img
                        class="hover:scale-110 transition duration-300 ease-in-out"
                        src="../assets/play.png"
                        alt=""
                      />
                      <div
                        class="flex flex-col items-start justify-center text-left"
                      >
                        <h1 class="text-white font-bold text-md">
                          Avengers: Endgame
                        </h1>
                        <p class="text-[#E3E3E3] font-medium text-sm">
                          Marvel Cinematic Universe
                        </p>
                      </div>

                      <div class="w-[0.1rem] h-10 bg-white"></div>

                      <h1 class="text-white font-bold">Action</h1>
                    </div>
                  </div>
                </div>
              </li>

              <li class="snap-start">
                <div
                  class="gambar w-96 h-60 rounded-xl bg-cover relative overflow-hidden"
                >
                  <div
                    class="absolute bottom-0 left-0 w-full bg-[#d4d4d4] py-2 px-4 bg-opacity-20 backdrop-blur-lg"
                  >
                    <div class="flex items-center justify-evenly">
                      <img
                        class="hover:scale-110 transition duration-300 ease-in-out"
                        src="../assets/play.png"
                        alt=""
                      />
                      <div
                        class="flex flex-col items-start justify-center text-left"
                      >
                        <h1 class="text-white font-bold text-md">
                          Avengers: Endgame
                        </h1>
                        <p class="text-[#E3E3E3] font-medium text-sm">
                          Marvel Cinematic Universe
                        </p>
                      </div>

                      <div class="w-[0.1rem] h-10 bg-white"></div>

                      <h1 class="text-white font-bold">Action</h1>
                    </div>
                  </div>
                </div>
              </li>

              <li class="snap-start">
                <div
                  class="gambar w-96 h-60 rounded-xl bg-cover relative overflow-hidden"
                >
                  <div
                    class="absolute bottom-0 left-0 w-full bg-[#d4d4d4] py-2 px-4 bg-opacity-20 backdrop-blur-lg"
                  >
                    <div class="flex items-center justify-evenly">
                      <img
                        class="hover:scale-110 transition duration-300 ease-in-out"
                        src="../assets/play.png"
                        alt=""
                      />
                      <div
                        class="flex flex-col items-start justify-center text-left"
                      >
                        <h1 class="text-white font-bold text-md">
                          Avengers: Endgame
                        </h1>
                        <p class="text-[#E3E3E3] font-medium text-sm">
                          Marvel Cinematic Universe
                        </p>
                      </div>

                      <div class="w-[0.1rem] h-10 bg-white"></div>

                      <h1 class="text-white font-bold">Action</h1>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
ul li .gambar {
  background-image: url(../assets/endgame.jpg);
}
</style>
