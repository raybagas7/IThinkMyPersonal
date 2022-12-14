import React, { useState } from 'react';
import { getRandomUsersRefresh } from '../../../utils/network-data';

import SocialRandomUser from './SocialRandomUser';

const SocialContainer = () => {
  const [randUser, setRandUser] = useState();
  const [initializing, setInitializing] = React.useState(true);
  React.useEffect(() => {
    getRandomUsersRefresh().then(({ error, data, message }) => {
      try {
        setRandUser(data);
        setInitializing(false);
      } catch (e) {
        console.log(message);
      }
    });
  }, []);

  if (initializing) {
    return (
      <section className="flex items-center justify-center">
        <div className="flex items-center justify-center">
          <span className="relative inline-flex">
            <span className="absolute top-0 right-0 -mt-16 -mr-14 flex h-32 w-32">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-yellow-400 opacity-75"></span>
              <span className="relative inline-flex h-32 w-32 rounded-full bg-yellow-500"></span>
            </span>
          </span>
        </div>
      </section>
    );
  }

  const { pool } = randUser;
  return (
    <>
      <div className="flex h-fit w-full items-center p-10">
        <div className="flex h-fit w-full flex-wrap justify-center gap-3 rounded-2xl bg-gold-poke p-10 pt-3 drop-shadow-lg">
          <div className="flex w-full items-center justify-center">
            <p className="mr-1 text-2xl">#</p>
            <form>
              <input type="text" className="rounded-full p-2 text-sm" />
            </form>
          </div>
          {pool
            ? pool.map((user) => (
                <SocialRandomUser key={user.search_id} {...user} />
              ))
            : null}
        </div>
      </div>
    </>
  );
};

export default SocialContainer;
