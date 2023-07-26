
import { Collection, Divider } from '@aws-amplify/ui-react';
import { useEffect, useState } from 'react';
import NewCard from "./newCard";

export default () => {

  return (
    <div>
      <div className=" d-flex justify-content-center">
        <div className=" d-flex align-items-center " style={{ height: "70vh" }}>
          <span className="text-center">
            <div className="row text-white">
              <br />
              <NewCard />
            </div>
          </span>
        </div>
      </div>
      <div className='row'>
      </div>
    </div>
  );
}

