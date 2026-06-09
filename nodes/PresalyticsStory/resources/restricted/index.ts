import type { INodeProperties } from 'n8n-workflow';

export const restrictedDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Restricted"
					]
				}
			},
			"options": [
				{
					"name": "Collaborators Post",
					"value": "Collaborators Post",
					"action": "Collborators: Bulk Update (Admin Only)",
					"description": "Allows for bulk updates on collaborator metadata.  Restricted to internal admins",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/collaborators"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /collaborators",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Restricted"
					],
					"operation": [
						"Collaborators Post"
					]
				}
			}
		},
		{
			"displayName": "Active",
			"name": "active",
			"type": "boolean",
			"default": true,
			"routing": {
				"send": {
					"property": "active",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Restricted"
					],
					"operation": [
						"Collaborators Post"
					]
				}
			}
		},
		{
			"displayName": "Lead Id",
			"name": "lead_id",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "lead_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Restricted"
					],
					"operation": [
						"Collaborators Post"
					]
				}
			}
		},
		{
			"displayName": "User Id",
			"name": "user_id",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "user_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Restricted"
					],
					"operation": [
						"Collaborators Post"
					]
				}
			}
		},
];
