function AboutSection({user}) {
    return (
          <div class="flex flex-col mt-6 w-full 2xl:w-2/3">
          {
          !user?.about?.length ?
            <div class="flex-1 bg-base-100 rounded-lg shadow-xl px-2 py-1 md:p-8">
              <h4 class="text-xl text-gray-900 font-bold">About</h4>
              <p class="mt-2 text-gray-700">
                {user?.about}
              </p>
            </div>
            :''
        }
  
          </div>
    );
}

export default AboutSection;