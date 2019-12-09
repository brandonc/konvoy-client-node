/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1.16.3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
* PodDisruptionBudgetStatus represents information about the status of a PodDisruptionBudget. Status may trail the actual state of a system.
*/
export class V1beta1PodDisruptionBudgetStatus {
    /**
    * current number of healthy pods
    */
    'currentHealthy': number;
    /**
    * minimum desired number of healthy pods
    */
    'desiredHealthy': number;
    /**
    * DisruptedPods contains information about pods whose eviction was processed by the API server eviction subresource handler but has not yet been observed by the PodDisruptionBudget controller. A pod will be in this map from the time when the API server processed the eviction request to the time when the pod is seen by PDB controller as having been marked for deletion (or after a timeout). The key in the map is the name of the pod and the value is the time when the API server processed the eviction request. If the deletion didn\'t occur and a pod is still there it will be removed from the list automatically by PodDisruptionBudget controller after some time. If everything goes smooth this map should be empty for the most of the time. Large number of entries in the map may indicate problems with pod deletions.
    */
    'disruptedPods'?: { [key: string]: Date; };
    /**
    * Number of pod disruptions that are currently allowed.
    */
    'disruptionsAllowed': number;
    /**
    * total number of pods counted by this disruption budget
    */
    'expectedPods': number;
    /**
    * Most recent generation observed when updating this PDB status. PodDisruptionsAllowed and other status informatio is valid only if observedGeneration equals to PDB\'s object generation.
    */
    'observedGeneration'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "currentHealthy",
            "baseName": "currentHealthy",
            "type": "number"
        },
        {
            "name": "desiredHealthy",
            "baseName": "desiredHealthy",
            "type": "number"
        },
        {
            "name": "disruptedPods",
            "baseName": "disruptedPods",
            "type": "{ [key: string]: Date; }"
        },
        {
            "name": "disruptionsAllowed",
            "baseName": "disruptionsAllowed",
            "type": "number"
        },
        {
            "name": "expectedPods",
            "baseName": "expectedPods",
            "type": "number"
        },
        {
            "name": "observedGeneration",
            "baseName": "observedGeneration",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return V1beta1PodDisruptionBudgetStatus.attributeTypeMap;
    }
}

