import React from 'react';
import './About.css'; // Ensure the path is correct
import CloseIcon from './Icons/Close_SM.svg'; // Ensure the path is correct

function Popup() {
    const closePopup = () => {
        const popup = document.getElementById('popup');
        if (popup) {
            popup.style.display = 'none';
        }
    };

    return (
        <div className="body">
        <div className="container">
            <div className="box">
                <div id="popup" className="popup">
                    <div className="pop-content">
                        <div className="close-main">
                            <span id="closePopupBtn" className="close" onClick={closePopup}>
                                <img src={CloseIcon} alt="Close" />
                            </span>
                        </div>
                        <h2>About Us</h2>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque possimus placeat, atque culpa in, impedit repellat iste laudantium reiciendis doloribus ratione eaque velit molestias quibusdam minus incidunt, quasi ab accusantium.
                            Atque quos cupiditate officia, expedita asperiores voluptatem placeat neque suscipit beatae quo optio veniam consequatur odio aperiam rerum amet at et consectetur! Provident pariatur dolorem, nisi dolore necessitatibus harum expedita.
                            Esse cupiditate, repellendus eum quibusdam alias repudiandae nulla fuga, eveniet sapiente ratione in sunt voluptatibus ad, inventore quia assumenda fugit enim? Sequi ab facere distinctio fugiat, odit rerum eligendi iusto?
                            Beatae aspernatur voluptatem, inventore commodi possimus similique distinctio, quam ut asperiores blanditiis quaerat alias cupiditate saepe maxime dolorum dolorem velit? Repellendus voluptatum tempora, similique placeat dolor fuga nam consectetur maiores!
                            At saepe reiciendis dolorum unde quia quod, in excepturi delectus mollitia odio dicta dignissimos impedit illo iste ipsa tempore voluptatum, magni aliquam sit. Quis architecto, esse atque animi iste iusto?
                            Suscipit nesciunt doloribus sint praesentium architecto mollitia iste veniam fugit temporibus voluptatibus eos, rem, est eaque totam illum non, a dolores. Exercitationem maiores est, iste possimus aspernatur vero doloribus non.
                            Vel perferendis libero magnam consequatur totam veritatis tempore itaque inventore. Nihil, rerum quia? Nihil, optio reiciendis. Quisquam enim ad nisi corporis quam incidunt esse, nam inventore, consequatur perspiciatis, dolores non?
                            Sunt accusamus in aperiam voluptatibus magnam tenetur alias magni provident exercitationem? Natus tempora laudantium earum, distinctio aliquam quis eligendi corporis? Illo qui officia eligendi! Aliquid aliquam saepe optio dolores iste?
                            Ex blanditiis repellat ratione voluptatibus ullam quam optio earum illo ea, doloremque nisi in magnam tempore officiis odio temporibus quo delectus provident debitis? Dolorem eum blanditiis quae culpa a qui!
                            Nam debitis, mollitia possimus tenetur a accusamus pariatur, sit doloremque magni explicabo inventore dolore est. Nulla unde corporis officia ipsum necessitatibus odio qui dignissimos voluptatum impedit, cupiditate eos similique fugit.
                            Impedit nisi quis aliquam necessitatibus aperiam obcaecati illo animi veritatis libero! Eligendi suscipit placeat, cumque dolores consectetur labore dolorem porro sapiente, quo temporibus ducimus necessitatibus! Consequatur voluptate ex ipsum excepturi.
                            Saepe vero quisquam delectus eveniet quia, quis, quod beatae corporis similique voluptatibus blanditiis ad molestias quos repellat eius inventore nesciunt, nemo nostrum velit nobis tenetur impedit? Necessitatibus eum ducimus perspiciatis.
                            Beatae sint asperiores autem ipsum eius magni vero aliquid placeat quidem minima, reiciendis voluptates dignissimos repellat eligendi at quae aut dolores. Incidunt unde quam repudiandae, natus quasi dolorem fugit perferendis?
                            Perspiciatis, fugiat asperiores, optio illum labore blanditiis odio exercitationem hic error nemo placeat beatae nobis reiciendis est cum sunt sed ab voluptas non. Eligendi, nulla nam! Nam ratione aut id.
                            Iste deleniti iure inventore error vitae, possimus aspernatur illo id, est, minus dolorum modi quasi exercitationem totam laboriosam sapiente assumenda itaque expedita repellendus. Cum libero voluptas nihil ipsam corrupti necessitatibus!
                            Laboriosam dolore distinctio obcaecati necessitatibus iure facere quas qui natus dolor sed? Mollitia soluta doloremque eligendi qui earum assumenda iusto! Porro necessitatibus sunt nam magnam corrupti delectus quaerat error sapiente?
                            Magnam, voluptatum aliquam aliquid ab consectetur deleniti blanditiis dolor? Eligendi voluptates ipsum tempora ex optio illo odio doloribus et magnam animi. Eveniet laborum earum atque nisi nobis omnis maxime nihil!
                            Asperiores dolore velit autem adipisci, impedit iste eveniet atque quaerat exercitationem neque saepe illum, officiis vitae minima molestiae! Impedit, deleniti? Ullam, itaque laboriosam saepe sapiente exercitationem sit corporis placeat ut!
                            Ut, adipisci, recusandae illum excepturi libero numquam a quos optio voluptates soluta laudantium vero tempore consequatur, commodi expedita aperiam sunt unde praesentium voluptatibus? Eos inventore provident aliquam. Necessitatibus, quas explicabo?
                            A voluptatibus voluptate numquam vero dicta, accusantium aspernatur non alias possimus atque deleniti unde laudantium, reprehenderit, sit dolorum quis officiis fuga asperiores? Perspiciatis dolor dolores voluptatum, tempore nisi repellat eveniet.
                        </p>
                    </div>    
                </div>
            </div>
        </div>
        </div>
    );
}

export default Popup;
