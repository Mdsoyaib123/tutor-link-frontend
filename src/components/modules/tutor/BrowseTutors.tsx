import { IUser } from "@/types/user";


const BrowseTutors = ({tutors}:{tutors: IUser[]}) => {
    return (
        <div>
            <h1>This is BrowseTutors</h1>
            <ul>
                {tutors.map((tutor, index) => (
                    <li key={index}>{JSON.stringify(tutor)}</li>
                ))}
            </ul>
        </div>
    );
};

export default BrowseTutors;