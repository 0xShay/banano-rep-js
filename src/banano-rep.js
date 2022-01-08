let httpNode = "https://api-beta.banano.cc";

const getData = async (body) => {
    const rawResponse = await fetch(httpNode, {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-type": "application/json"
        },
        body: JSON.stringify(body)
    });
    return (await rawResponse.json());
}

const accountInfo = async (account) => {
    const repsonseContent = await getData({
        "action": "account_info",
        "account": account,
        "representative": true
    });
    return repsonseContent;
}

const getRepWeight = async (repAccount) => {
    const repsonseContent = await getData({
        "action": "account_weight",
        "account": repAccount
    });
    return repsonseContent["weight"];
}

const getOnlineRepresentatives = async () => {
    const repsonseContent = await getData({
        "action": "representatives_online",
        "weight": true
    });
    return repsonseContent["representatives"];
}

const getOnlineWeight = async () => {
    let onlineWeight = 0;
    let onlineReps = await getOnlineRepresentatives();
    Object.keys(onlineReps).forEach(rep => {
        onlineWeight += parseInt(onlineReps[rep]["weight"])
    });
    return onlineWeight;
}

const repPercentage = async (repAccount) => {
    let repWeight = await getRepWeight(repAccount);
    let onlineWeight = await getOnlineWeight();
    return (repWeight / onlineWeight) * 100;
}

const setNode = (userNode) => { httpNode = userNode; }