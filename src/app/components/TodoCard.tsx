import { useState } from "react";

export const TodoCard = ({ title, onclick }: { title: string, onclick: () => void }) => {

  const [editMode, setEditMode] = useState(false);
  const [newTitle, setNewTitle] = useState("");

  function onSave(){
    setNewTitle(newTitle);
    setEditMode(false);
  }
  

  return (
    <div className="max-w-md w-max">
      <div className="flex justify-around items-center p-4 bg-white shadow-md rounded-md ">
        {editMode ?
          <input onChange={(e)=>{
            setNewTitle(e.target.value);
          }} type="text" className="flex-1 border-2 border-black  p-2 rounded-md text-center" />
          : <div className=" max-w-md w-max flex-1  border-2 border-black  p-2 rounded-md text-center">
            { newTitle || title }
          </div>
        }
        {!editMode? <button onClick={()=>setEditMode(true)} className="ml-2 px-4 py-2 border-2 border-black bg-yellow-200  rounded-md hover:bg-yellow-500">
          Edit
        </button>:null}
       {!editMode?<button onClick={onclick} className="ml-2 px-4 py-2 bg-red-200 border-2 border-black rounded-md hover:bg-red-500">
          Delete
        </button>:null}
        
        {editMode?(<button onClick={onSave} className="ml-2 px-4 py-2 bg-blue-200 border-2 border-black rounded-md hover:bg-blue-500">
          Save
        </button>):null}
        {editMode?(<button onClick={()=>setEditMode(false)} className="ml-2 px-4 py-2 bg-red-200 border-2 border-black rounded-md hover:bg-red-500">
          Cancel
        </button>):null}

      </div>
    </div>
  );
}
