import ActionsSubmit from '../../../../../lib/use-cases/actions/Submit.mjs';

export default {
    serviceClass : ActionsSubmit,
    before       : async (factory) => {
        await factory.standardSetup();
        const users = await factory.setupUsers();
        const actions = await factory.setupActions(users[0].id);

        const actionsMap = {};

        for (const action of actions) {
            actionsMap[action.type] = action.id;
        }

        return actionsMap;
    }
};
