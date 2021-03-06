import { Component } from '@core/component';

/**
 * Parses the internal move id out of the templateId (eg: "V0013_MOVE_WRAP" => 13)
 */
export class InternalIdParser implements Component {
    /**
     * Parses the internal move id out of the templateId (eg: "V0013_MOVE_WRAP" => 13)
     * @param {String} id The templateId to parse
     * @returns {Number} The parsed internalId
     */
    Process(id: string): number {
        return parseInt(id.split('_')[0].slice(1), 10)
    }
}
