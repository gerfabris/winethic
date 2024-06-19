
export const renderServices = (services) => {
    return (
        <div className="images-container">
            {

                services.map((service) => {
                    return (
                        <div className="image-box" key={service.id}>
                            <img 
                            src={service.image}
                            className="service-image"
                            alt="service" />
                            <div className="content">
                                <p className="title">{service.name}</p>
                                <h4 className="description">{service.description}</h4>
                                <button
                                    className="btn"
                                    onClick={() => window.open(service.href)}
                                >Contactar</button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
}
