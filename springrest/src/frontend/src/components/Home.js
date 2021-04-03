import { React, useEffect } from "react";
import { Jumbotron, Container, Button } from "reactstrap";

const Home=()=>{
    useEffect( () => {
        document.title = "Home";
    }, []);
    return(
        <div>
            <Jumbotron className="text-center">
                <h1>asnajnsnvs</h1>
                <p>
                    bsivvdjv njdnvnv sjndjksnvkjsnvkdjvkbksvnkdf vdfvbjfdvbk
                    sdhvbjdvbdjfvbjdfvbjdbvjfkdnbkjdb jbvkjdfv vnjskv
                </p>
                <Container>
                    <Button color="primary" outline>Start Learning</Button>
                </Container>

            </Jumbotron>
        </div>
    );
}

export default Home;