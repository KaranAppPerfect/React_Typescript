import { useState , useEffect} from "react"
import { Portals } from "./Portals";


export const Main = ()  => {

    const [showModal, setShowModal] = useState(false);

    useEffect( () => {
        setTimeout( () => {
            setShowModal(true);
        }, 1000)
    }, [])

    const Styles = {
        modalButton : {
            padding : '5px',
            border: '1px solid black',
        }
    };

    const closeModal = () => setShowModal(false);

    const handleCloseButton = (
        <button style={Styles.modalButton} onClick={closeModal}>
            Accept
        </button>
    );

    const mainModal = (
        <Portals closeModal={closeModal} handleCloseButton={handleCloseButton}>
          <h2>STAY TUNED</h2>
          <p>
            Subscribe to our newsletter and never miss our designs ,latest news.etc.
            Our newsletter is sent once a week, every Monday
          </p>
        </Portals>
      );

    

    return ( 
        <>
            {/* <button style={Styles.modalButton} onClick={() => setShowModal(true)}>
                Open Modal
            </button> */}
            {showModal && mainModal}
            <div>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit,
                    laudantium laborum voluptas officiis nisi nesciunt numquam autem ipsa
                    cumque officia omnis quos iure eveniet accusamus iste consequuntur?
                    Odit, quia repellat.
                </p>
                <br />
                <br />
                <br />
                <br />
                <br />
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit,
                    laudantium laborum voluptas officiis nisi nesciunt numquam autem ipsa
                    cumque officia omnis quos iure eveniet accusamus iste consequuntur?
                    Odit, quia repellat.
                </p>
                <br />
                <br />
                <br />
                <br />
                <br />
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit,
                    laudantium laborum voluptas officiis nisi nesciunt numquam autem ipsa
                    cumque officia omnis quos iure eveniet accusamus iste consequuntur?
                    Odit, quia repellat.
                </p>
                <br />
                <br />
                <br />
                <br />
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit,
                    laudantium laborum voluptas officiis nisi nesciunt numquam autem ipsa
                    cumque officia omnis quos iure eveniet accusamus iste consequuntur?
                    Odit, quia repellat.
                </p>
                <br />
                <br />
                <br />
                <br />
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit,
                    laudantium laborum voluptas officiis nisi nesciunt numquam autem ipsa
                    cumque officia omnis quos iure eveniet accusamus iste consequuntur?
                    Odit, quia repellat.
                </p>
                <br />
                <br />
                <br />
                <br />
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit,
                    laudantium laborum voluptas officiis nisi nesciunt numquam autem ipsa
                    cumque officia omnis quos iure eveniet accusamus iste consequuntur?
                    Odit, quia repellat.
                </p>
                <br />
                <br />
                <br />
                <br />
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit,
                    laudantium laborum voluptas officiis nisi nesciunt numquam autem ipsa
                    cumque officia omnis quos iure eveniet accusamus iste consequuntur?
                    Odit, quia repellat.
                </p>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit,
                    laudantium laborum voluptas officiis nisi nesciunt numquam autem ipsa
                    cumque officia omnis quos iure eveniet accusamus iste consequuntur?
                    Odit, quia repellat.
                </p>
                <br />
                <br />
                <br />
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit,
                    laudantium laborum voluptas officiis nisi nesciunt numquam autem ipsa
                    cumque officia omnis quos iure eveniet accusamus iste consequuntur?
                    Odit, quia repellat.
                </p>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit,
                    laudantium laborum voluptas officiis nisi nesciunt numquam autem ipsa
                    cumque officia omnis quos iure eveniet accusamus iste consequuntur?
                    Odit, quia repellat.
                </p>
                <br />
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit,
                    laudantium laborum voluptas officiis nisi nesciunt numquam autem ipsa
                    cumque officia omnis quos iure eveniet accusamus iste consequuntur?
                    Odit, quia repellat.
                </p>
                <br />
                <br />
                <br />
                <br />
                <br />
            </div>
        </>
    )


}