import type { INodeProperties } from 'n8n-workflow';

export const eventsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Events"
					]
				}
			},
			"options": [
				{
					"name": "Story Id Events Get",
					"value": "Story Id Events Get",
					"action": "Events: List Events",
					"description": "Get a list of Events available to users of this story",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/{{$parameter[\"id\"]}}/events"
						}
					}
				},
				{
					"name": "Story Id Events Post",
					"value": "Story Id Events Post",
					"action": "Events: Manage Events",
					"description": "Add a message to the Story's conversation",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/{{$parameter[\"id\"]}}/events"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /{id}/events",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Events"
					],
					"operation": [
						"Story Id Events Get"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "the id from the story object",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Events"
					],
					"operation": [
						"Story Id Events Get"
					]
				}
			}
		},
		{
			"displayName": "POST /{id}/events",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Events"
					],
					"operation": [
						"Story Id Events Post"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "the id from the story object",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Events"
					],
					"operation": [
						"Story Id Events Post"
					]
				}
			}
		},
		{
			"displayName": "Action",
			"name": "action",
			"type": "options",
			"default": "create",
			"options": [
				{
					"name": "Create",
					"value": "create"
				},
				{
					"name": "Fire",
					"value": "fire"
				},
				{
					"name": "Change",
					"value": "change"
				},
				{
					"name": "Delete",
					"value": "delete"
				}
			],
			"routing": {
				"send": {
					"property": "action",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Events"
					],
					"operation": [
						"Story Id Events Post"
					]
				}
			}
		},
		{
			"displayName": "Action Params",
			"name": "action_params",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "action_params",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Events"
					],
					"operation": [
						"Story Id Events Post"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Events"
					],
					"operation": [
						"Story Id Events Post"
					]
				}
			}
		},
];
