import type { INodeProperties } from 'n8n-workflow';

export const schemasDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Schemas"
					]
				}
			},
			"options": [
				{
					"name": "Story Outline Schema",
					"value": "Story Outline Schema",
					"action": "Story Outline Schema",
					"description": "Json Schema for validating Story Outline objects",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/outline-schema/{{$parameter[\"schema_version\"]}}/story-outline.json"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /outline-schema/{schema_version}/story-outline.json",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Schemas"
					],
					"operation": [
						"Story Outline Schema"
					]
				}
			}
		},
		{
			"displayName": "Schema Version",
			"name": "schema_version",
			"required": true,
			"description": "The semanitic version of a schema (e.g. '0.3.1')",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Schemas"
					],
					"operation": [
						"Story Outline Schema"
					]
				}
			}
		},
];
