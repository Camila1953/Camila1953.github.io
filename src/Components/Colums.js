export default function Colums ({titlecolum,description}){
    return (
            <div className="caja">
                <div className="content">
                    <h1 className="title-colum">{titlecolum}</h1>
                    <p className="description-colum">{description}</p>
                </div>
            </div>
    );
}