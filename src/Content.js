
const Content = ({ propertyName, handleCheck, handleDelete}) => {

  return (
    <main>
        <section>
            <ul>
                {propertyName.map((item) =>(
                    <li key={item.id}>
                        <input 
                            type="checkbox" 
                            value={item.checked}
                            onChange={()=>handleCheck(item.id)}
                        />

                        <label 
                            htmlFor="" 
                            style={item.checked ? {textDecoration:"line-through"}:null}
                            onDoubleClick={()=>handleCheck(item.id)}
                        >
                            {item.description}
                        </label>

                        <button 
                            onClick={() => handleDelete(item.id)}
                        >
                            Delete
                        </button>

                    </li>
                ))}
            </ul>
        </section>
    </main>
  )
}

export default Content