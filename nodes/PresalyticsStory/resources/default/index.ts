import type { INodeProperties } from 'n8n-workflow';

export const defaultDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					]
				}
			},
			"options": [
				{
					"name": "Get Environment",
					"value": "Get Environment",
					"action": "Environment: Get",
					"description": "pass rendering metadata to the client-side scripts",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/environment/"
						}
					}
				},
				{
					"name": "Spec No Tags",
					"value": "Spec No Tags",
					"action": "Specification: No tags",
					"description": "json-formatted version of this spec with the tags removed to help with codegen processes",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/no_tags_spec"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /environment/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Environment"
					]
				}
			}
		},
		{
			"displayName": "GET /no_tags_spec",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Spec No Tags"
					]
				}
			}
		},
];
