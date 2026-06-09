import type { INodeProperties } from 'n8n-workflow';

export const viewsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Views"
					]
				}
			},
			"options": [
				{
					"name": "Sessions Id Views Get",
					"value": "Sessions Id Views Get",
					"action": "Views: List Session Views",
					"description": "Get data for all views in a session",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sessions/{{$parameter[\"session_id\"]}}/views"
						}
					}
				},
				{
					"name": "Sessions Id Views Post",
					"value": "Sessions Id Views Post",
					"action": "Views: Create A Session View",
					"description": "Create a page view object for a viewing session",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sessions/{{$parameter[\"session_id\"]}}/views"
						}
					}
				},
				{
					"name": "Views Id Delete",
					"value": "Views Id Delete",
					"action": "Views: Delete by Id",
					"description": "Remove a view and dependant data.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/views/{{$parameter[\"view_id\"]}}"
						}
					}
				},
				{
					"name": "Views Id Get",
					"value": "Views Id Get",
					"action": "Views: Get View",
					"description": "Get view meta data",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/views/{{$parameter[\"view_id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /sessions/{session_id}/views",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Views"
					],
					"operation": [
						"Sessions Id Views Get"
					]
				}
			}
		},
		{
			"displayName": "Session Id",
			"name": "session_id",
			"required": true,
			"description": "The primary key for a view session",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Views"
					],
					"operation": [
						"Sessions Id Views Get"
					]
				}
			}
		},
		{
			"displayName": "POST /sessions/{session_id}/views",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Views"
					],
					"operation": [
						"Sessions Id Views Post"
					]
				}
			}
		},
		{
			"displayName": "Session Id",
			"name": "session_id",
			"required": true,
			"description": "The primary key for a view session",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Views"
					],
					"operation": [
						"Sessions Id Views Post"
					]
				}
			}
		},
		{
			"displayName": "Active M Secs",
			"name": "activeMSecs",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "activeMSecs",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Views"
					],
					"operation": [
						"Sessions Id Views Post"
					]
				}
			}
		},
		{
			"displayName": "Additional",
			"name": "additional",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "additional",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Views"
					],
					"operation": [
						"Sessions Id Views Post"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "End Time",
			"name": "endTime",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "endTime",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Views"
					],
					"operation": [
						"Sessions Id Views Post"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Page Number",
			"name": "pageNumber",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "pageNumber",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Views"
					],
					"operation": [
						"Sessions Id Views Post"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Start Time",
			"name": "startTime",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "startTime",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Views"
					],
					"operation": [
						"Sessions Id Views Post"
					]
				}
			}
		},
		{
			"displayName": "DELETE /views/{view_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Views"
					],
					"operation": [
						"Views Id Delete"
					]
				}
			}
		},
		{
			"displayName": "View Id",
			"name": "view_id",
			"required": true,
			"description": "The primary key for a page view within a session",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Views"
					],
					"operation": [
						"Views Id Delete"
					]
				}
			}
		},
		{
			"displayName": "GET /views/{view_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Views"
					],
					"operation": [
						"Views Id Get"
					]
				}
			}
		},
		{
			"displayName": "View Id",
			"name": "view_id",
			"required": true,
			"description": "The primary key for a page view within a session",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Views"
					],
					"operation": [
						"Views Id Get"
					]
				}
			}
		},
];
