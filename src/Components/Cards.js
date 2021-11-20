export default function Cards ({titlecard, price1, price2,text}) {
    return (
        <>
            <div className="title-card">{titlecard}</div>
            <div className="price-card">
                <div className="price1">{price1}</div>
                <div className="price2">{price2}</div>
            </div>
            <button className="button-card">
            <a href class="button-text">{text}</a>
            </button>            
        </>
    )
}