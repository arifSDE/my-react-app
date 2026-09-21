type SportType = {
    name: string;
};

export default function SportCard({ sport }: {sport: SportType}) {
    return (
        <div className="sport">
            <h5>Name: {sport.name}</h5>
            <p>Players: </p>
        </div>
    )
}