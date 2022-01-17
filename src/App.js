import './App.css';

function App() {

    const send = (e) =>{
        console.log(e)
        e.preventDefault();


    }



    return (
        <div className="App">
            <form onSubmit={send}>
                <div>
                    <label>Name: <input type='text' name={'name'}/></label>
                </div>
                <button>Send</button>
            </form>

        </div>
    );
}

export default App;
