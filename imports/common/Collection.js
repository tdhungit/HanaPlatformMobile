import Meteor from 'react-native-meteor';

/**
 * CollectionCore
 */
class CollectionCore {
    collection;

    /**
     * constructor
     * @param collectionName
     */
    constructor(collectionName) {
        this.collection = Meteor.collection(collectionName);
    }

    /**
     * fixed filter
     * @param selector
     * @param actionName
     * @returns {*}
     */
    fixedFilters(selector, actionName = 'View') {
        return selector;
    }

    /**
     * get filters for owner data
     * @param filters
     * @param actionName
     * @returns {{}}
     */
    filterOwnerData(filters = {}, actionName = 'View') {
        let selector = {};
        if (typeof filters === 'string') {
            selector._id = filters;
        } else {
            selector = {...filters};
        }

        return this.fixedFilters(selector, actionName);
    }

    /**
     * filter data
     * @param filters
     * @returns {*|number|T}
     */
    find(filters = {}) {
        const options = this.filterOwnerData(filters, 'List');
        return this.collection.find(options);
    }
}

/**
 * CollectionBase
 */
class CollectionBase extends CollectionCore {
    /**
     * fixed filters for owner data
     * @param selector
     * @param actionName
     * @returns {{}}
     */
    fixedFilters(selector = {}, actionName = 'View') {
        const user = Meteor.user();
        selector = super.fixedFilters(selector, actionName);
        selector.companyId = user && user.companyId || '';
        return selector;
    }
}

/**
 * CollectionAssign
 */
class CollectionAssign extends CollectionBase {

}

/**
 * Collection
 * @param collectionName
 * @param type
 * @returns {CollectionCore}
 * @constructor
 */
export function Collection(collectionName, type = 'base') {
    if (type === 'core') {
        return new CollectionCore(collectionName);
    }

    if (type === 'base') {
        return new CollectionBase(collectionName);
    }

    return new CollectionAssign(collectionName);
}