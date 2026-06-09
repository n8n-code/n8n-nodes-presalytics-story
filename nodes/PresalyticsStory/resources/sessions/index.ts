import type { INodeProperties } from 'n8n-workflow';

export const sessionsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Sessions"
					]
				}
			},
			"options": [
				{
					"name": "Session ID Delete",
					"value": "Session ID Delete",
					"action": "Sessions: Delete by Id",
					"description": "Remove a session and dependant data.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/sessions/{{$parameter[\"session_id\"]}}"
						}
					}
				},
				{
					"name": "Session ID Get",
					"value": "Session ID Get",
					"action": "Sessions: Get",
					"description": "Get session metadata",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sessions/{{$parameter[\"session_id\"]}}"
						}
					}
				},
				{
					"name": "Story ID Sessions Get",
					"value": "Story ID Sessions Get",
					"action": "Sessions: List Story Sessions",
					"description": "Get a list of sessions asscoaited with this story",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/{{$parameter[\"id\"]}}/sessions"
						}
					}
				},
				{
					"name": "Story ID Session Post",
					"value": "Story ID Session Post",
					"action": "Sessions: Create a Session",
					"description": "Create a new session",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/{{$parameter[\"id\"]}}/sessions"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "DELETE /sessions/{session_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sessions"
					],
					"operation": [
						"Session ID Delete"
					]
				}
			}
		},
		{
			"displayName": "Session ID",
			"name": "session_id",
			"required": true,
			"description": "The primary key for a view session",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Sessions"
					],
					"operation": [
						"Session ID Delete"
					]
				}
			}
		},
		{
			"displayName": "GET /sessions/{session_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sessions"
					],
					"operation": [
						"Session ID Get"
					]
				}
			}
		},
		{
			"displayName": "Session ID",
			"name": "session_id",
			"required": true,
			"description": "The primary key for a view session",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Sessions"
					],
					"operation": [
						"Session ID Get"
					]
				}
			}
		},
		{
			"displayName": "Include Relationships",
			"name": "include_relationships",
			"description": "Indicate whether the returned object should include child relationships",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "include_relationships",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sessions"
					],
					"operation": [
						"Session ID Get"
					]
				}
			}
		},
		{
			"displayName": "GET /{id}/sessions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sessions"
					],
					"operation": [
						"Story ID Sessions Get"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "the id from the story object",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Sessions"
					],
					"operation": [
						"Story ID Sessions Get"
					]
				}
			}
		},
		{
			"displayName": "Include Relationships",
			"name": "include_relationships",
			"description": "Indicate whether the returned object should include child relationships",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "include_relationships",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sessions"
					],
					"operation": [
						"Story ID Sessions Get"
					]
				}
			}
		},
		{
			"displayName": "POST /{id}/sessions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sessions"
					],
					"operation": [
						"Story ID Session Post"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "the id from the story object",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Sessions"
					],
					"operation": [
						"Story ID Session Post"
					]
				}
			}
		},
		{
			"displayName": "Collaborator User ID",
			"name": "collaboratorUserId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "collaboratorUserId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sessions"
					],
					"operation": [
						"Story ID Session Post"
					]
				}
			}
		},
		{
			"displayName": "Host",
			"name": "host",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "host",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sessions"
					],
					"operation": [
						"Story ID Session Post"
					]
				}
			}
		},
];
