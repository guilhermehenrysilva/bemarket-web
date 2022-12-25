import './styles.scss';

export default function Item() {
    return (
        <div className="main-item">
            <div className="content">
                <div className="product-details">
                    <div className="product-img">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKItNGczQVDEtGEVEvBuKkXjFYpbxK_NGjFA&usqp=CAU" alt="" />
                    </div>

                    <div className="details">
                        <span className="name">Biscoito Recheio Doce de Leite Passatempo Pacote 130g</span>
                        <span className="supermarket">Supermercado Maxsul</span>
                    </div>
                </div>

                <div className="product-price">
                    <span>R$ 3,68</span>
                </div>
            </div>
        </div>
    );
}