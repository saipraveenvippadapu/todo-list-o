import { useEffect, useState } from "react";
import { ADD, DELETE, EDIT } from "./todolistslice";
import { useDispatch, useSelector } from "react-redux";
function Todilist() {
  let data = useSelector((state) => state.todo.todolist);
  console.log(data);
  let dispatch = useDispatch();
  const [initialstate, setInitialstate] = useState("");
  const [array, setarray] = useState([]);
  const [dbdata, setdbdata] = useState([]);
  const [edititem, setedititem] = useState(null);

  const [saveedit, setsaveEdit] = useState(data[edititem]);
  console.log(array, "array");

  let handleadd = () => {
    let newarray = [...array];
    newarray.push(initialstate);
    setarray(newarray);
    dispatch(ADD(initialstate));
    setInitialstate("");
    localStorage.setItem("1st list", JSON.stringify([data]));
  };
  useEffect(() => {
    let responce = localStorage.getItem("1st list");
    console.log(responce, "storage");
    setdbdata(responce);
    console.log(dbdata, "dbdata");
  }, []);

  let handledelete = (item) => {
    dispatch(DELETE(item));
  };
  let handleedit = (index) => {
    setedititem(index);
    console.log(index, "index");
  };
  let handlesave = (index) => {
    // console.log(index, "index");
    // console.log(saveedit, "item");
    dispatch(EDIT({ item: saveedit, index: index }));
    setedititem(-1);
    setInitialstate("");
  };

  // console.log(array);
  return (
    <div className="alll">
      <div className="input-field">
        <input
          className="input"
          type="text"
          value={initialstate}
          onChange={(e) => {
            setInitialstate(e.target.value);
          }}
        />
        <button className="btn-add" onClick={handleadd}>
          Add
        </button>
      </div>
      <div className="list-data">
        <ul>
          {data.map((item, index) => (
            <div>
              <li key={index}>
                {edititem === index ? (
                  <div>
                    <input
                      className="input-e"
                      type="text"
                      value={saveedit}
                      onChange={(e) => {
                        setsaveEdit(e.target.value);
                      }}
                    />
                    <button
                      className="btn-add"
                      onClick={() => {
                        handlesave(index);
                      }}
                    >
                      save
                    </button>
                  </div>
                ) : (
                  <div>
                    {index + 1}.{item}
                    <button
                      className="btn-delete"
                      onClick={() => {
                        handledelete(item);
                      }}
                    >
                      delete
                    </button>
                    <button
                      className="btn-add"
                      onClick={() => {
                        handleedit(index);
                      }}
                    >
                      Edit
                    </button>
                  </div>
                )}
              </li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default Todilist;
