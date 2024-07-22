import { useAtom } from "jotai/react";
import { userAtom } from "../components/User";
import { SimpleLayout } from "../layouts/SimpleLayout";

function Data() {
    const [user, setUser] = useAtom(userAtom);

    return (
        <SimpleLayout>
            <p> { JSON.stringify(user)}</p>
        </SimpleLayout>
        // <div>   
        //     <p>{JSON.stringify(user)}</p>
        // </div>
    )
}    
export default Data 