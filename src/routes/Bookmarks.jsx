import { useState, Fragment } from 'react'

const Bookmarks = () => {
  const [isSignedIn, setIsSignedIn] = useState(false); // setting this for now, have to use redux in order to catch this state.
  
	return (
    <Fragment>
      {
        isSignedIn ? (
          <div>
            <h1>Bookmarks</h1>
          </div>
        ) : (
          <div>
            <h1 className="text-center mt-4">Please Sign In to access bookmarks</h1>
            <div className="flex gap-1 items-center justify-center">
              <Link
                to="/sign-in"
                className="w-[150px] h-[50px] flex items-center justify-center"
              >
                <h2 className="">EXISTING USER?</h2>
              </Link>
              {/* <h2 className="w-[100px] h-[50px] bg-white rounded-[20px]"></h2> */}
              <Link
                to="/sign-up"
                className="w-[100px] h-[50px] bg-[#3f3f3f] rounded-[20px] flex items-center justify-center"
              >
                <h2 className="text-center text-white">SIGN UP</h2>
              </Link>
            </div>
          </div>
        )
      }
    </Fragment>
  )
};

export default Bookmarks;
