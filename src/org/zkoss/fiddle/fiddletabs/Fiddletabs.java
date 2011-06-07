package org.zkoss.fiddle.fiddletabs;

import java.io.IOException;

import org.zkoss.zk.au.AuRequest;
import org.zkoss.zk.ui.event.Event;
import org.zkoss.zk.ui.event.Events;
import org.zkoss.zk.ui.sys.ContentRenderer;
import org.zkoss.zul.Tabs;

public class Fiddletabs extends Tabs {

	public static final String EVENT_ADD = "onAdd";
	private boolean addable = false;

	{
		addClientEvent(Fiddletabs.class,EVENT_ADD,0);
	}
	
	protected void renderProperties(ContentRenderer renderer) throws IOException {
		super.renderProperties(renderer);
		
		if(addable){
			render(renderer, "addable", addable);
		}
		
	}
	
	public void service(AuRequest request, boolean everError) {
		
		if(EVENT_ADD.equals(request.getCommand())){
			if(!addable) return ;
			Events.postEvent(new Event(EVENT_ADD, this));			
		}else
			super.service(request, everError);
	}
	
	
	public String getZclass() {
		return (this._zclass != null ? this._zclass : "z-tabs");
	}
	
	public boolean isAddable() {
		return addable;
	}
	
	public void setAddable(boolean _addable) {
		if (_addable != addable ) {
			addable = _addable;
			smartUpdate("addable", addable);
		}
		this.addable = _addable;
	}
}
