function Tags({ logement }) {
    return (
        <div className="tags-container">
            {logement.tags.map((tag, index) => (
                <span key={index} className="tags-container__tag">
                    {tag}
                </span>
            ))}
        </div>
    );  
}

export default Tags;