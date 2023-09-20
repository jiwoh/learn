import React from 'react'
// import { TbShare2 } from 'react-icons/tb'

function PhotoItemsAction({ actionInfo }) {
  return (
    <div className="absolute inset-x-0 bottom-4 hidden flex-col justify-end px-4 group-hover:flex">
      <div className="flex w-full justify-between">
        <div className="z-10 flex items-center">
          <p className=" font-body rounded-full bg-white p-1 px-3 text-sm text-zinc-900">
            {actionInfo?.Category}
          </p>
        </div>

        {/* <div className="z-10 flex items-center justify-end">
          <button className="rounded-full bg-white p-2 text-zinc-900">
            <TbShare2 size="1.3rem" />
          </button>
        </div> */}
      </div>
    </div>
  )
}

export default PhotoItemsAction
