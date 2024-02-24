import AboutSection from "./AboutSection";
import PersonalInfo from "./PersonalInfo";
import UserPosts from "./UserPosts";

function Tab({user,posts}) {
    return (
        <div role="tablist" className="tabs tabs-lifted">
        <input type="radio" name="my_tabs_2" role="tab" defaultChecked className="tab" aria-label="User Posts" />
        <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
        <div className="h-full bg-base-200 p-1">
      <UserPosts posts={posts} />
      </div>
        
        </div>
      
        <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="User Info"  />
        <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">

        <AboutSection user={user} />
  {/* Personal  */}
       <PersonalInfo user={user} />
        </div>
      
        <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Settings" />
        <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6"> <UserPosts /></div>
      </div>
    );
}

export default Tab;