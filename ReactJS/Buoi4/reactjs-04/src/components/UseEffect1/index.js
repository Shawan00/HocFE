import { useEffect } from "react";

function UseEffect1() {
    useEffect(() => { // sau khi render ra giao diện thì mới chạy đến hàm này
        let liItems = document.querySelectorAll('ul li');
        console.log(liItems);
    });

    return (
        <>
            <ul>
                <li>Mục 1</li>
                <li>Mục 2</li>
                <li>Mục 3</li>
            </ul>
        </>
    );
}

export default UseEffect1