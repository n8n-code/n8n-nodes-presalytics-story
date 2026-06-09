import type { INodeProperties } from 'n8n-workflow';

export const cacheDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Cache"
					]
				}
			},
			"options": [
				{
					"name": "Cache Post",
					"value": "Cache Post",
					"action": "Cache: Store Subdocument",
					"description": "An endpoint for Presalytics Renderers to cache html subdocuments for subsequent retrieval by the browser.  Documents Are retrieved via token expire after 1 minute.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/cache"
						}
					}
				},
				{
					"name": "Cache Nonce Get",
					"value": "Cache Nonce Get",
					"action": "Cache: Get Subdocument",
					"description": "An endpoint for broswer retreive html documents that were cached durin the rendering process via a nonce (token)",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/cache/{{$parameter[\"nonce\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /cache",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Cache"
					],
					"operation": [
						"Cache Post"
					]
				}
			}
		},
		{
			"displayName": "Current User ID",
			"name": "current_user_id",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "current_user_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Cache"
					],
					"operation": [
						"Cache Post"
					]
				}
			}
		},
		{
			"displayName": "Nonce",
			"name": "nonce",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "nonce",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Cache"
					],
					"operation": [
						"Cache Post"
					]
				}
			}
		},
		{
			"displayName": "Subdocument",
			"name": "subdocument",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "subdocument",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Cache"
					],
					"operation": [
						"Cache Post"
					]
				}
			}
		},
		{
			"displayName": "GET /cache/{nonce}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Cache"
					],
					"operation": [
						"Cache Nonce Get"
					]
				}
			}
		},
		{
			"displayName": "Nonce",
			"name": "nonce",
			"required": true,
			"description": "A one-time use token for retieving items in the users cache",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Cache"
					],
					"operation": [
						"Cache Nonce Get"
					]
				}
			}
		},
];
