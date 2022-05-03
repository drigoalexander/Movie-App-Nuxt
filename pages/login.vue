<template>
  <div class="bg-[#081F34] w-screen h-screen font-open">
    <div class="flex flex-col justify-center items-center gap-20 py-20">
      <h1 class="text-2xl text-white font-bold">NUXTFLIX</h1>

      <div class="flex flex-col items-center justify-center gap-6">
        <h1 class="text-4xl text-white font-bold">Login Into Your Account</h1>
        <p class="text-xl text-[#A6A6A6] text-center tracking-wider">
          Watch More Than 130.000+ Online Movies <br />
          With a High Quality Video and Audio In a Glance
        </p>
      </div>

      <div
        class="flex flex-col items-center justify-center gap-14 relative w-full"
      >
        <input
          type="text"
          placeholder="Username"
          class="w-1/4 pb-1 bg-[#081F34] border-b-2 border-b-[#7BC79A] text-[#5F6D7A] focus:text-white focus:outline-none appearance-none"
        />
        <input
          type="text"
          placeholder="Username"
          class="w-1/4 pb-1 bg-[#081F34] border-b-2 border-b-[#7BC79A] text-[#5F6D7A] focus:text-[#5F6D7A] focus:outline-none appearance-none"
        />

        <button
          class="text-sm text-[#A6A6A6] -mt-6 border-b-2 border-b-[#081F34] hover:border-b-[#7BC79A] transition duration-200 ease-in-out"
        >
          Forgot Password?
        </button>
      </div>

      <div
        class="flex flex-col items-center justify-center -mt-2 relative w-full"
      >
        <p class="text-[#A6A6A6] text-md">Didn't have an account?</p>

        <button
          class="mt-6 w-1/4 bg-gradient-to-r from-[#00AFD2] via-[#55C0AB] to-[#7BC79A] rounded-md hover:scale-[1.03] transition duration-500 ease-in-out"
        >
          <div class="flex justify-between px-4 py-3">
            <p class="text-sm text-white">Create a new one</p>

            <img src="" alt="" />
          </div>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
