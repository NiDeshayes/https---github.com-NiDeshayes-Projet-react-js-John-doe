import React from 'react';
import './BlogPage.css';
import html from '../images/html.jpg';
import plantes from '../images/plantes.jpg';
import mac from '../images/mac.jpg';
import tablette from '../images/tablette.jpg';
import seo from '../images/seo.jpg';
import code from '../images/coder.jpg';

function BlogPage() {
    return (
        <div className="blog-page" id="blog">
            <div className="blog-header">
                <h1>BLOG</h1>
                <h2 className="subtitle">Retrouvez ici quelques articles sur le développement web</h2>
                <hr className="underline" />
            </div>
            <div className="blog-content">
                <div className="blog-item">
                    <img src={html} alt="./Image1" />
                    <h3>Coder son site en HTML/CSS</h3>
                    <p>Some Quick exemple text to build on the card tilte and make up the bulk of the card's content .</p>
                    <button>Lire la suite</button>
                </div>
                <div className="blog-item">
                    <img src={plantes} alt="Image 2" />
                    <h3>Vendre ses produits sur le web</h3>
                    <p>Some Quick exemple text to build on the card tilte and make up the bulk of the card's content .</p>
                    <button>Lire la suite</button>
                </div>
                <div className="blog-item">
                    <img src={mac} alt="Image 2" />
                    <h3>Se positionner sur Google </h3>
                    <p>Some Quick exemple text to build on the card tilte and make up the bulk of the card's content .</p>
                    <button>Lire la suite</button>
                </div>
                <div className="blog-item">
                    <img src={tablette} alt="Image 2" />
                    <h3>Coder en responsive design</h3>
                    <p>Some Quick exemple text to build on the card tilte and make up the bulk of the card's content .</p>
                    <button>Lire la suite</button>
                </div>
                <div className="blog-item">
                    <img src={seo} alt="Image 2" />
                    <h3>techniques de referencement</h3>
                    <p>Some Quick exemple text to build on the card tilte and make up the bulk of the card's content .</p>
                    <button>Lire la suite</button>
                </div>
                <div className="blog-item">
                <img src={code} alt="Image 2" />
                    <h3>Apprendre à coder</h3>
                    <p>Some Quick exemple text to build on the card tilte and make up the bulk of the card's content .</p>
                    <button>Lire la suite</button>
                </div>
                
            </div>
        </div>
    );
}

export default BlogPage;
