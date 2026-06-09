import type { INodeProperties } from 'n8n-workflow';

export const conversationDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Conversation"
					]
				}
			},
			"options": [
				{
					"name": "Story Id Messages Get",
					"value": "Story Id Messages Get",
					"action": "Conversation: List Conversation Messages",
					"description": "Get a list of messages that have been send in this story",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/{{$parameter[\"id\"]}}/messages"
						}
					}
				},
				{
					"name": "Story Id Messages Post",
					"value": "Story Id Messages Post",
					"action": "Conversation: Send a Message",
					"description": "Add a message to the Story's conversation",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/{{$parameter[\"id\"]}}/messages"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /{id}/messages",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Conversation"
					],
					"operation": [
						"Story Id Messages Get"
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
						"Conversation"
					],
					"operation": [
						"Story Id Messages Get"
					]
				}
			}
		},
		{
			"displayName": "POST /{id}/messages",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Conversation"
					],
					"operation": [
						"Story Id Messages Post"
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
						"Conversation"
					],
					"operation": [
						"Story Id Messages Post"
					]
				}
			}
		},
		{
			"displayName": "POST /{id}/messages<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Conversation"
					],
					"operation": [
						"Story Id Messages Post"
					]
				}
			}
		},
];
