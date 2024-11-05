import Cousin from "../Cousin/Cousin";

const Uncle = ({asset}) => {
    return (
        <div className="grandpa">
            <h2>Uncle</h2>
            <section className="flex">
               <Cousin name={'rafsan'} asset={asset}></Cousin>
               <Cousin name={'Rahin'} ></Cousin>
            </section>
        </div>
    );
};

export default Uncle;