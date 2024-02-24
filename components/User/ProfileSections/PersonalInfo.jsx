
function PersonalInfo({user}) {
    return (
        <div className="my-4 flex flex-col 2xl:flex-row space-y-4 2xl:space-y-0 2xl:space-x-4">
        <div className="w-full flex flex-col 2xl:w-1/3">
          <div className="flex-1 bg-white rounded-lg shadow-xl px-4 py-1 md:p-8">
            <h4 className="text-xl text-gray-900 font-bold">Personal Info</h4>
            <ul className="mt-2 text-gray-700">
              <li className="flex border-y py-2 justify-between">
                <span className="font-bold w-fit md:w-24">Full name:</span>
                <span className="text-gray-700">{user?.fullName}</span>
              </li>
              <li className="flex border-y py-2 justify-between">
                <span className="font-bold w-fit md:w-24">Username:</span>
                <span className="text-gray-700">{user?.username}</span>
              </li>
              <li className="flex border-y py-2 justify-between">
                <span className="font-bold w-fit md:w-24">Email:</span>
                <span className="text-gray-700">{user?.email}</span>
              </li>
              <li className="flex border-y py-2 justify-between">
                <span className="font-bold w-fit md:w-24">Education:</span>
                <span className="text-gray-700">{user?.education}</span>
              </li>
              <li className="flex border-y py-2 justify-between">
                <span className="font-bold w-fit md:w-24">Work:</span>
                <span className="text-gray-700">{user?.work}</span>
              </li>
              <li className="flex border-y py-2 justify-between">
                <span className="font-bold w-fit md:w-24">Facebook:</span>
                <span className="text-gray-700">{user?.fbId}</span>
              </li>
              <li className="flex border-y py-2 justify-between">
                <span className="font-bold w-fit md:w-24">Discord:</span>
                <span className="text-gray-700">{user?.discord}</span>
              </li>
              <li className="flex border-y py-2 justify-between">
                <span className="font-bold w-fit md:w-24">Gender:</span>
                <span className="text-gray-700 capitalize">{user?.gender}</span>
              </li>
              <li className="flex border-y py-2 justify-between">
                <span className="font-bold w-fit md:w-24">Phone:</span>
                <span className="text-gray-700">{user?.phone}</span>
              </li>             
            </ul>
          </div>
       
          {/* Activity log */}
        {/* <Statistics /> */}
        </div>
        {/* Other sections */}
      </div>
    );
}

export default PersonalInfo;