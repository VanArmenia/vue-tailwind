<template>
  <div class="fixed z-10 top-0 left-0 w-full h-full bg-neutral-900 flex flex-row justify-around transition-opacity duration-300 bg-opacity-60 p-10">
    <div class="w-1/2">
      <div class="bg-amber-50 top-4 p-6 rounded-md bottom-4">
        <form>
          <div class="form-group mb-6">
            <input type="text" class="form-control block w-full px-3 py-1.5 text-base font-normal
      text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition
      ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput7" placeholder="Name">
          </div>
          <div class="form-group mb-6">
            <input type="text" class="form-control block w-full px-3 py-1.5 text-base font-normal
      text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition
      ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput7" placeholder="Author">
          </div>
          <div class="form-group mb-6">
            <input type="email" class="form-control block w-full px-3 py-1.5 text-base font-normal
      text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition
      ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput8" placeholder="Email address">
          </div>
          <div class="form-group mb-6">
            <textarea class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleFormControlTextarea13" rows="3" placeholder="Content"></textarea>
          </div>
          <div class="col-span-6 sm:col-span-3">
            <label for="country" class="block text-sm font-medium text-gray-400">Tags</label>
            <select id="country" name="country" autocomplete="country" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-gray-900">
              <option>Artists</option>
              <option>Directors</option>
              <option>Short movie</option>
              <option>Soundtrack</option>
            </select>
          </div>

          <div class="form-group sm:col-span-3 mt-4">
            <label class="block text-sm font-medium text-gray-400 pb-1" for="file_input">Upload file</label>
            <input class="form-control block w-full px-3 py-1.5 text-base font-normal
      text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition
      ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="file_input" type="file">
          </div>

          <div class="form-group form-check text-center my-4 flex">
            <input type="checkbox" class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm checked:bg-cyan-700 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer" id="exampleCheck87" checked>
            <label class="form-check-label inline-block text-gray-800" for="exampleCheck87">Send me a copy of this message</label>
          </div>
          <button @click.prevent="$emit('close')" type="submit" class="w-full px-6 py-2.5 bg-cyan-700 text-white font-medium text-xs
    leading-tight uppercase rounded shadow-md hover:bg-cyan-500 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition
    duration-150 ease-in-out">Send</button>
        </form>
      </div>
    </div>

    </div>


</template>

<script>
export default ({
  setup() {

    return {}
  },
});
</script>

<style>
[type="file"] {
  /* Style the color of the message that says 'No file chosen' */
  color: #878787;
}
[type="file"]::-webkit-file-upload-button {
  background: #dc6119;
  border: 2px solid #ED1C1B;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;
  font-size: 12px;
  outline: none;
  padding: 6px 22px;
  transition: all 1s ease;
  margin-right: 16px;
}

[type="file"]::-webkit-file-upload-button:hover {
  background: #fff;
  border: 2px solid #535353;
  color: #000;
}


/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter-from, .modal-leave-to {
  opacity: 0;
}

.modal-enter-active .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

</style>
