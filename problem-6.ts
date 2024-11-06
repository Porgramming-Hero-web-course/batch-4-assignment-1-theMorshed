interface Profile {
    name: string;
    age: number;
    email: string;
}

function updateProfile(profile: Profile, update: Partial<Object>): Profile {
    const [updateKey] = Object.keys(update);
    const [updateValue] = Object.values(update);
    profile[updateKey] = updateValue;
    return profile;
}

const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
console.log(updateProfile(myProfile, { age: 26 }));