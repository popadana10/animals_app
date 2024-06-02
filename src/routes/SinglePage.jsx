import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import BackToTopButton from "../components/BackToTopButton";

const SinglePage = ({ ...rest }) => {
    const { category, name } = useParams();
    const categoryItems = rest[category];
    const data = categoryItems.find((item) => item.name === name);
    const [paragraph, setParagraph] = useState("");
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchLastParagraph = async () => {
            try {
                const response = await axios.get(
                    "https://en.wikipedia.org/w/api.php",
                    {
                        params: {
                            action: "query",
                            format: "json",
                            prop: "extracts",
                            titles: data.name,
                            exintro: true,
                            explaintext: true,
                            origin: "*",
                        },
                    }
                );

                const pages = response.data.query.pages;
                const page = Object.values(pages)[0];
                const extract = page.extract;

                if (extract) {
                    const paragraphs = extract
                        .split("\n")
                        .filter((paragraph) => paragraph.trim() !== "");
                    const lastParagraph = paragraphs[paragraphs.length - 1];
                    setParagraph(lastParagraph);
                } else {
                    setError("No content found for this article.");
                }
            } catch (err) {
                setError("Failed to fetch data from Wikipedia.");
            }
        };

        fetchLastParagraph();
    }, [data.name]);

    return (
        <div id="SinglePage">
            <div className="imgcontainer">
                <img
                    src={`https://source.unsplash.com/random/400×400/?${data.name}`}
                    alt={`Photo of ${data.name}`}
                />
            </div>
            <h3>This {category} has {data.likes} likes.</h3>
            <div className="wiki">{error ? <p>{error}</p> : <p>{paragraph}</p>}</div>
            <BackToTopButton category={category} />
        </div>
    );
};

export default SinglePage;
