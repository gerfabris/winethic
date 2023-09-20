export const renderContent = (blogs) => {
    return (
        <div className="images-container">
            {
                blogs.map((item) => {
                    return (
                        <div className="image-box" key={item.id}>
                            <img 
                            src={item.image}
                            className="blog-image"
                            alt={item.name} />
                            <div className="content">
                                <p className="title">{item.name}</p>
                                <h4 className="description">{item.description}</h4>
                                <button
                                    className="btn"
                                    onClick={() => window.open(item.url)}
                                >Contactar</button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
}